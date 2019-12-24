import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
  }

  const substract = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Counter with Hooks using useState </h2>
        counter result : {count}
        <div>
          <button className="counterBtn" onClick={substract}>-</button>
          <button className="counterBtn" onClick={add}>+</button>
        </div>
        <hr width="600"/>
      </header>
    </div>
  );
}

export default App;
