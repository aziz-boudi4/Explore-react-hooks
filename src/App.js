import React, { useState, useEffect } from 'react';
import './App.css';
import Counter from './Components/Counter'

const App = () => {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      <header className="App-header">
        <Counter count={count} setCount={setCount} initialCount={initialCount}/>
        <hr width="600"/>
      </header>
    </div>
  );
}

export default App;
