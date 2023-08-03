import './styles.scss';
import Board from './components/Board';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);

  console.log('hello');
  const onBtnClick = () => {
    setCounter(currentCounter => {
      return currentCounter + 1;
    });
  };

  return (
    <div className="app">
      <button onClick={onBtnClick}>Click me plz</button>
      <div>{counter}</div>
    </div>
  );
}

export default App;
