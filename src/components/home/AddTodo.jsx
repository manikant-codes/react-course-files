import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "../../styles/home/addTodo.module.css";
import { addTodo } from "../../services/apiServices";

function AddTodo(props) {
  const [todo, setTodo] = useState("");

  function handleChange(e) {
    setTodo(e.target.value);
  }

  async function handleAdd() {
    const result = await addTodo({ text: todo });
    props.setTodos([...props.todos, result.data]);
  }

  return (
    <div className={styles.container}>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAdd}>
        Add <FontAwesomeIcon icon={faAdd} />
      </button>
    </div>
  );
}

export default AddTodo;
