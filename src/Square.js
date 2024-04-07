import React from 'react'

const Square = ({value, squareId, onSquareClick}) => {
    const square_Id = 'square'+squareId;
    return <button className="square" id={square_Id} onClick={onSquareClick} 
            >{value}</button>;
}
export default Square
