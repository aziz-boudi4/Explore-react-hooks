import React, { useState } from 'react';
import './App.css';
import Counter from './Components/Counter'

const App = () => {
  const [count, setCount] = useState(0)

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
