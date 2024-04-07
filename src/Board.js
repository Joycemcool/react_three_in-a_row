import {Square} from './Square.js'

export function Board({ xIsNext, squares, onPlay }) {

    function handleClick(i) {
      if (squares[i] || calculateWinner(squares)) {

        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";

      } else {
        nextSquares[i] = "O";

      }

      onPlay(nextSquares);
    }
  
    const xCount = squares.reduce((count, square)=> {
        if(square === 'X'){
            return count +1;
        }
        return count;
    }, 0);

    const oCount = squares.reduce((count, square)=> {
        if(square === 'O'){
            return count +1;
        }
        return count;
    }, 0);

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;

    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
    
    return <>
            <div className="status">{status}</div>
            <div className="board-row">
              <Square value={squares[0]} squareId={0} onSquareClick={() => handleClick(0)} />
              <Square value={squares[1]} squareId={1} onSquareClick={() => handleClick(1)} />
              <Square value={squares[2]} squareId={2} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
              <Square value={squares[3]} squareId={3} onSquareClick={() => handleClick(3)} />
              <Square value={squares[4]} squareId={4} onSquareClick={() => handleClick(4)} />
              <Square value={squares[5]} squareId={5} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
              <Square value={squares[6]} squareId={6} onSquareClick={() => handleClick(6)} />
              <Square value={squares[7]} squareId={7} onSquareClick={() => handleClick(7)} />
              <Square value={squares[8]} squareId={8} onSquareClick={() => handleClick(8)} />
            </div>
            <div>X Move Count:{xCount}</div>
            <div>O Move Count: {oCount}</div>
          </>
  }

  
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        hightlightRow(lines[i])
        return squares[a];
      }
    }
    return null;
  }

  function hightlightRow(row){
    console.log(row);
    row.forEach(element => {
        console.log(element);
        let squareid='square'+element;
        document.getElementById(squareid).style.background = 'yellow';
    });
}
  