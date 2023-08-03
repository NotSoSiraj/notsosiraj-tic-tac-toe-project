/* eslint-disable react/prop-types */


const StatusMessage = ({ winner, isXNext, squares }) => {
  const noMovesLeft = squares.every(sqaureValue => sqaureValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return <div>Winner is <span className="win">{winner}</span></div>;
    }

    if (!winner && noMovesLeft) {
      return <div><span className="text">O</span> and <span className="text">X</span> tied</div>;
    }

    if (!winner && !noMovesLeft) {
      return <div>Next player is <span className="green">{nextPlayer}</span></div>;
    }

    return null;
  };
  return (
    <div>
      <span className="status-message">{renderStatusMessage()}</span>
    </div>
  );
};

export default StatusMessage;
