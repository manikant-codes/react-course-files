import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function UseReducerCounterDemo() {
  // const [count, setCount] = useState(0);
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="demoContainer">
      <div className="demoWrapper">
        {/* <button onClick={() => setCount((c) => c - 1)}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <h1 style={{ margin: 0 }}>{count}</h1>
        <button onClick={() => setCount((c) => c + 1)}>
          <FontAwesomeIcon icon={faPlus} />
        </button> */}
        <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <h1 style={{ margin: 0 }}>{state.count}</h1>
        <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
}

export default UseReducerCounterDemo;
