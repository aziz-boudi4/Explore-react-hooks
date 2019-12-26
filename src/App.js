import React from 'react';
import './App.css';
import Counter from './Components/Counter'
import CounterReducer from './Components/Counter-with-useReducer'

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <hr width="600"/>
        <CounterReducer />
        <hr width="600"/>
      </header>
    </div>
  );
}

export default App;
