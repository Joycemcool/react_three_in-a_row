import React from 'react'

const Square = ({value, squareId, onSquareClick}) => {
    const square_Id = 'square'+squareId;
    let color;
    switch(value){
        case 0: color ="#aaaaaa";
                break;
        case 1: color ="#003399";
                break;
        case 2: color ="white";
                break;
        default:
                color = "transparent";
                break;
    } 
    return <button className="square" id={square_Id} onClick={onSquareClick} style={{backgroundColor:color}}
            ></button>;
}
export default Square
