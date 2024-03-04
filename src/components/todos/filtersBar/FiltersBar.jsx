import { faBroom, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import styles from "../../../styles/todos/filtersBar.module.css";
import {
  cleanUpParams,
  getStateFromSearchQuery,
} from "../../../utils/filtersHelper";

function FiltersBar(props) {
  const { fetchAllTodos } = props;
  const location = useLocation();
  const initialFormState = getStateFromSearchQuery(location.search);
  const [formState, setFormState] = useState(initialFormState);
  const [params, setParams] = useSearchParams();

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let query = Object.entries(formState);
    query = query.map((queryParam, index) => {
      if (!queryParam[1]) return "";
      if (index === 0) {
        return `${queryParam[0]}=${queryParam[1].replaceAll(" ", "+")}`;
      } else {
        return `${queryParam[0]}=${queryParam[1]}`;
      }
    });
    query = query.join("&");
    await fetchAllTodos(query);
    const cleaned = cleanUpParams(formState);
    setParams(cleaned);
  }

  async function handleClear() {
    const cleaned = getStateFromSearchQuery("");
    setFormState(cleaned);
    await fetchAllTodos();
    setParams({});
  }

  return (
    <div className={styles.filtersBarContainer}>
      <form className={styles.filtersForm} onSubmit={handleSubmit}>
        <input
          id="task"
          name="task"
          type="text"
          value={formState.task}
          onChange={handleChange}
          placeholder="Search task..."
        />
        <div className={styles.customSelect}>
          <select
            id="isCompleted"
            name="isCompleted"
            value={formState.isCompleted}
            onChange={handleChange}
          >
            <option value="">Filter by...</option>
            <option value="true">Completed</option>
            <option value="false">Not Completed</option>
          </select>
        </div>
        <div className={styles.customSelect}>
          <select
            id="sort"
            name="sort"
            value={formState.sort}
            onChange={handleChange}
          >
            <option value="">Sort by...</option>
            <option value="text">Task Name</option>
            <option value="createdAt">Date Created</option>
            <option value="updatedAt">Date Updated</option>
          </select>
        </div>
        <button
          type="button"
          onClick={handleClear}
          className={styles.clearAllBtn}
        >
          <FontAwesomeIcon icon={faBroom} />
          Clear All
        </button>
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
          Search
        </button>
      </form>
    </div>
  );
}

export default FiltersBar;
