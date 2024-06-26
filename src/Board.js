import React, { useState, useEffect } from 'react';
import axios from "axios";
import Square from './Square';

export function Board({ url }) {
    const [squares, setSquares] = useState([]);
    const [reload, setReload] = useState(false);
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        axios.get(url).then((response) => {
            setSquares(response.data.rows);           
        })
    },[url,reload])

    useEffect(() => {
        if (isChecked) {
            let mistakeSquares = [];
            for (let i = 0; i < squares.length; i++) {
                for (let j = 0; j < squares[i].length; j++) {
                    const square = squares[i][j];
                    if (square.currentState !== 0 && square.currentState !== square.correctState) {
                        mistakeSquares.push([i, j]);
                    }
                }
            }
            mistakeSquares.forEach(square => document.getElementById(`square${square[0]}-${square[1]}`).textContent = "!");
        } else {
            let squaresBtn = document.querySelectorAll('.square');
            squaresBtn.forEach(btn => btn.textContent = "")
        }
    }, [isChecked, squares]); 


    const handleClick = (rowIndex, colIndex) => {
        setSquares(prevSquares => {
            const newSquares = [...prevSquares];
            const square = newSquares[rowIndex][colIndex];
            const squareid='square'+rowIndex+'-'+colIndex;
            const square_element =document.getElementById(squareid);
            if(square.canToggle===true){
                if (square.currentState === 0) {
                    square.currentState = 1;
                } else if (square.currentState === 1) {
                    square.currentState = 2;
                } else if (square.currentState === 2) {
                    square.currentState = 0;
                }
                setBackground(square.currentState,square_element);                
            }
            return newSquares;
        });
    };
    
    const checkHandler = () => {
        setIsChecked(!isChecked);
    }
    const checkPuzzle = () => {
        const isCompleted =()=>squares.every((row) => row.every(square => square.currentState === square.correctState));
        const hasMistake = () => squares.some(
            (row) => row.some(
                (square) =>
                     square.currentState !== 0 && square.currentState !== square.correctState)
        );
        
        let message;;
        if(isCompleted()){
            message = "You did it!!";
        }
        else if(hasMistake()){            
            message="Something is wrong";
        }
        else{
            message = "So far so good";
        } 
        alert(message);       
        return; 
    }

    const handleReload = () => {
        setReload(!reload); 
    };

    const squareBoard = squares.map((row, rowIndex) => {
        return (
            <div key={rowIndex} className='board-row'>
                {row.map((cell, colIndex) => (
                    <Square
                        key={colIndex}
                        value={cell.currentState}
                        squareId={`${rowIndex}-${colIndex}`}
                        onSquareClick={() => handleClick(rowIndex, colIndex)}
                    />
                ))}
            </div>
        );
    });

    return (
        <div>
            <button onClick={handleReload}>Reload</button>  
            <div className="board-container">
                
            {squareBoard}
            
            </div>
            <label>
                <input type="checkbox" checked={isChecked} onChange={checkHandler} />
                Show mistake
            </label>    
             <button onClick={checkPuzzle}>Check Puzzel</button>  

        </div>
    );
}

export function hightlightRow(row) {
    console.log(row);
    row.forEach(element => {
        console.log(element);
        let squareid = 'square' + element;
        document.getElementById(squareid).style.background = 'yellow';
    });
}

export function setBackground(currentState, square) {
    if (currentState === 0) {
        square.style.backgroundColor = "#aaaaaa";
    } else if (currentState === 1) {
        square.style.backgroundColor = "#003399";
    } else if (currentState === 2) {
        square.style.backgroundColor = "white";
    }
}