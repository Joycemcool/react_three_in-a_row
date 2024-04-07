import React, { useState, useEffect } from 'react';
import Square from './Square';

export function Board({ url }) {
    const [squares, setSquares] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setSquares(json);
                // console.log(squares);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [squares]);

    const handleClick = (rowIndex, cellIndex) => {
        setSquares(prevSquares => {
            const newSquares = [...prevSquares];
            const square = newSquares[rowIndex][cellIndex];
            if (square.currentState === 0) {
                square.currentState = 1;
            } else if (square.currentState === 1) {
                square.currentState = 2;
            } else if (square.currentState === 2) {
                square.currentState = 0;
            }
            return newSquares;
        });
    };

    // const testBoard = squares.map((row, rowIndex) => {
    //     return (
    //         <div key={rowIndex} className='board-row'>
    //             {row.map((cell, cellIndex) => (
    //                 <Square
    //                     key={cellIndex}
    //                     value={cell.value}
    //                     squareId={`${rowIndex}-${cellIndex}`}
    //                     onSquareClick={() => handleClick(rowIndex, cellIndex)}
    //                 />
    //             ))}
    //         </div>
    //     );
    // });

    return (
        <div>
            <h1>test</h1>

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

export function setBackground(currentState, cell) {
    if (currentState === 0) {
        cell.style.backgroundColor = "#aaaaaa";
    } else if (currentState === 1) {
        cell.style.backgroundColor = "#003399";
    } else if (currentState === 2) {
        cell.style.backgroundColor = "white";
    }
}