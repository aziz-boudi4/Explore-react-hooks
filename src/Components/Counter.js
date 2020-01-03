import React, { useState, useEffect } from 'react';

const Counter = () => {

  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    console.log('useEffect Counter triggered')
    document.title = `You clicked useState ${count} times`;
  });

  const add = () => {
    setCount(count + 1)
  }

  const substract = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <h2>Counter with Hooks using useState </h2>
      counter result : {count}
      <div>
        <button className="counterBtn" onClick={() => setCount(initialCount)}>Reset</button>
        <button className="counterBtn" onClick={substract}>-</button>
        <button className="counterBtn" onClick={add}>+</button>
      </div>
    </div>

  );
}




export default Counter;
