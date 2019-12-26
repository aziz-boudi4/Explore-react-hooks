import React, { useState, useEffect } from 'react';
import './App.css';
import Counter from './Components/Counter'

const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      <header className="App-header">
        <Counter count={count} setCount={setCount}/>
        <hr width="600"/>
      </header>
    </div>
  );
}

export default App;
