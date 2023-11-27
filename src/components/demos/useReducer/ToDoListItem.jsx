import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TODO_ACTIONS } from "./UseReducerToDoDemo";

function ToDoListItem({ id, task, isCompleted, dispatch }) {
  function handleDelete() {
    dispatch({ type: TODO_ACTIONS.DELETE, payload: id });
  }

  function handleCheckChanged() {
    dispatch({ type: TODO_ACTIONS.CHECK, payload: id });
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCheckChanged}
        />
        <p
          style={{
            margin: 0,
            textDecoration: isCompleted ? "line-through" : "none",
          }}
        >
          {task}
        </p>
      </div>
      <button onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default ToDoListItem;
