import React, { useState } from "react";
import { getAllTodos } from "../../services/apiServices";
import styles from "../../styles/home/filtersBar.module.css";

const initialFormState = {
  task: "",
  isCompleted: "false",
  sort: "text",
};

function FiltersBar(props) {
  const { setTodos } = props;

  const [formState, setFormState] = useState(initialFormState);

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let query = Object.entries(formState);
    query = query.map((queryParam, index) => {
      if (index === 0) {
        if (!queryParam[1]) return "";
        return `${queryParam[0]}=${queryParam[1].replaceAll(" ", "+")}`;
      }
      return `${queryParam[0]}=${queryParam[1]}`;
    });
    query = query.join("&");
    const result = await getAllTodos(query);
    setTodos(result.data);
  }

  async function handleClear() {
    setFormState(initialFormState);
    const result = await getAllTodos();
    setTodos(result.data);
  }

  return (
    <div className={styles.filtersBarContainer}>
      <form className={styles.filtersForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task">Task</label>
          <input
            id="task"
            name="task"
            type="text"
            value={formState.task}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="isCompleted">See Completed</label>
          <div className={styles.customSelect}>
            <select
              id="isCompleted"
              name="isCompleted"
              value={formState.isCompleted}
              onChange={handleChange}
            >
              <option value="true">Completed</option>
              <option value="false">Not Completed</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="sort">Sort By</label>
          <div className={styles.customSelect}>
            <select
              id="sort"
              name="sort"
              value={formState.sort}
              onChange={handleChange}
            >
              <option value="text">Task Name</option>
              <option value="createdAt">Date Created</option>
              <option value="updatedAt">Date Updated</option>
            </select>
          </div>
        </div>
        <button type="submit">Search</button>
        <button
          type="button"
          onClick={handleClear}
          className={styles.clearAllBtn}
        >
          Clear All
        </button>
      </form>
    </div>
  );
}

export default FiltersBar;
