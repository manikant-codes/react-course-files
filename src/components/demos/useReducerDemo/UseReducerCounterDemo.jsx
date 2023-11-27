import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useReducer } from "react";

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
  const initialState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div className="demoContainer">
      <div className="demoWrapper">
        <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <h2 style={{ margin: 0, fontSize: "2.5rem" }}>{state.count}</h2>
        <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
}

export default UseReducerCounterDemo;
