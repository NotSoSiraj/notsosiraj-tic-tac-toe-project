import './styles.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './components/StatusMessage';


function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(squares);

 

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((sqaureValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }

        return sqaureValue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  const onNewGameStart = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(false);
  };

  return (
    <div className="app">
      <h2>TIC TAC TOE<span className='chota'>-SRJ-</span></h2>
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />

      <button type='button' className='Reset' onClick={onNewGameStart}>Start new game</button>
    </div>
  );
}

export default App;
