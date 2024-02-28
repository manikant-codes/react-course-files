import React from "react";
import { useSearchParams } from "react-router-dom";
import { getAllTodos } from "../../services/apiServices";

// text input
// select input completed & uncompleted
// sort
// select

function FiltersBar() {
  const [params, setParams] = useSearchParams({ text: "" });

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
      <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
        <div>
          <p>Task</p>
          <input
            type="text"
            style={{ marginTop: "8px" }}
            value={params.get("text")}
            onChange={(e) => {
              setParams({ text: e.target.value });
            }}
          />
        </div>
        <div>
          <p>See Completed</p>
          <select name="" id="">
            <option value="">Completed</option>
            <option value="">Not Completed</option>
          </select>
        </div>
        <div>
          <p>Sort By</p>
          <select name="" id="">
            <option value="">Task Name</option>
            <option value="">Date Created</option>
            <option value="">Date Updated</option>
          </select>
        </div>
        <button
          onClick={async () => {
            getAllTodos();
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default FiltersBar;
