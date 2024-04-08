import React, { useState, useEffect } from 'react';
import Square from './Square';

export function Board({ url }) {
    const [squares, setSquares] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setSquares(json.rows);
                // console.log(squares);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [url,reload]);

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
            {squareBoard}
            <label>
                <input type="checkbox" checked={reload} onChange={handleReload} />
                Show mistake
            </label>    
             <button >Check</button>  

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