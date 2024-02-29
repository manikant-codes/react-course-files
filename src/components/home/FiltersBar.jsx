import React, { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getAllTodos } from "../../services/apiServices";

// text input
// select input completed & uncompleted
// sort
// select

function FiltersBar() {
  const [params, setParams] = useSearchParams({});
  const location = useLocation();
  const [formState, setFormState] = useState({
    task: "",
    isCompleted: "false",
    sort: "text",
  });

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("formState", formState, location.search);
    setParams(formState);
    console.log("params.entries()", Array.from(params.entries()));
    const result = await getAllTodos(location.search);
    console.log("result", result);
  }

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 60,
        padding: "32px",
        backgroundColor: "#757575",
        color: "black",
        bottom: 0,
      }}
    >
      <form
        style={{ display: "flex", gap: "16px", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <div>
          <p>Task</p>
          <input
            name="task"
            type="text"
            style={{ marginTop: "8px" }}
            value={formState.task}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>See Completed</p>
          <select
            name="isCompleted"
            value={formState.isCompleted}
            onChange={handleChange}
          >
            <option value="true">Completed</option>
            <option value="false">Not Completed</option>
          </select>
        </div>
        <div>
          <p>Sort By</p>
          <select name="sort" value={formState.sort} onChange={handleChange}>
            <option value="text">Task Name</option>
            <option value="createdAt">Date Created</option>
            <option value="updatedAt">Date Updated</option>
          </select>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default FiltersBar;
