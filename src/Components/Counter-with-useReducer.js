import React, { useReducer, useEffect } from 'react';

// re-init the counter lazily
function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {count: state.count + 1};
    case "decrement":
      return {count: state.count > 0 ? state.count - 1 : 0};
    case "reset":
      return init(action.payload)
    default:
      throw new Error();
  }
}


function CounterReducer({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  useEffect(() => {
    document.title = `You clicked useReducer ${state.count} times`;
  });

  return (
    <div>
      <h2>Counter with Hooks using useReducer </h2>
      counter result : {state.count}
      <div>
        <button className="counterBtn" onClick={() => dispatch({type: "reset", payload: initialCount})}>Reset</button>
        <button className="counterBtn" onClick={() => dispatch({type: "decrement"})}>-</button>
        <button className="counterBtn" onClick={() => dispatch({type: "increment"})}>+</button>
      </div>
    </div>
  )
}

export default CounterReducer;
