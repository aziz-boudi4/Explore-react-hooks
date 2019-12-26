import React, { useReducer, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {count: state.count + 1};
      break;
    case "decrement":
      return {count: state.count > 0 ? state.count - 1 : 0};
      break;
    case "reset":
      return {count : 0}
      break;
    default:
      throw new Error();
  }
}

const initialState = { count : 0};


function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.title = `You clicked useReducer ${state.count} times`;
  });

  return (
    <div>
      <h2>Counter with Hooks using useReducer </h2>
      counter result : {state.count}
      <div>
        <button className="counterBtn" onClick={() => dispatch({type: "reset"})}>Reset</button>
        <button className="counterBtn" onClick={() => dispatch({type: "decrement"})}>-</button>
        <button className="counterBtn" onClick={() => dispatch({type: "increment"})}>+</button>
      </div>
    </div>
  )
}

export default CounterReducer;
