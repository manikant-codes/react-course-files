import React, { useReducer } from "react";
import ToDoListItem from "./ToDoListItem";

export const TODO_ACTIONS = {
  INPUT: "INPUT",
  ADD: "ADD",
  CHECK: "CHECK",
  DELETE: "DELETE",
};

function reducer(state, action) {
  switch (action.type) {
    case TODO_ACTIONS.INPUT:
      return { ...state, input: action.payload };
    case TODO_ACTIONS.ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), task: state.input, isCompleted: false },
        ],
      };
    case TODO_ACTIONS.DELETE: {
      const updatedToDos = state.todos.filter((item) => {
        if(item.id === action.payload) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        todos: updatedToDos,
      };
    }
    case TODO_ACTIONS.CHECK: {
      const updatedToDos = state.todos.map((item, index) => {
        if (item.id === action.payload) {
          return { ...item, isCompleted: !item.isCompleted };
        } else {
          return item;
        }
      });
      return {
        ...state,
        todos: updatedToDos,
      };
    }
    default:
      return state;
  }
}

function UseReducerToDoDemo() {
  const initialState = {
    input: "",
    todos: [{ id: 1, task: "New Task", isCompleted: true }],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="demoContainer">
      <div className="demoWrapper" style={{ flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <input
            type="text"
            onChange={(e) => {
              dispatch({ type: TODO_ACTIONS.INPUT, payload: e.target.value });
            }}
          />
          <button
            onClick={() =>
              dispatch({
                type: TODO_ACTIONS.ADD,
              })
            }
          >
            Add
          </button>
        </div>
        <div style={{ width: "100%", display: "grid", gap: "16px" }}>
          {state.todos.map((item, index) => (
            <ToDoListItem
              key={index}
              id={item.id}
              task={item.task}
              isCompleted={item.isCompleted}
              dispatch={dispatch}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UseReducerToDoDemo;
