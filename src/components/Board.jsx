import Square from './Square';
import { useState } from 'react';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  console.log(squares);
  const handleSquareClick = clickedPosition => {
    setSquares(currentSquares => {
      return currentSquares.map((sqaureValue, position) => {
        if (clickedPosition === position) {
          return 'X';
        }

        return sqaureValue;
      });
    });
  };

  const renderSqaure = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSqaure(0)}
        {renderSqaure(1)}
        {renderSqaure(2)}
      </div>
      <div className="board-row">
        {renderSqaure(3)}
        {renderSqaure(4)}
        {renderSqaure(5)}
      </div>
      <div className="board-row">
        {renderSqaure(6)}
        {renderSqaure(7)}
        {renderSqaure(8)}
      </div>
    </div>
  );
};

export default Board;
