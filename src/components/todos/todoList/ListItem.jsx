import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "../../../styles/todos/todoList.module.css";
import { updateTodo } from "../../../services/apiServices";

function ListItem(props) {
  const { todo, handleOpen, fetchAllTodos } = props;
  const { text, isCompleted, _id } = todo;
  const [isChecked, setIsChecked] = useState(isCompleted);

  async function handleChange() {
    setIsChecked(!isChecked);
    await updateTodo(_id, { text: text, isCompleted: !isChecked });
    await fetchAllTodos();
  }

  return (
    <div className={styles.listItemContainer}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <p className={styles.taskPara}>{text}</p>
      <button
        className={`${styles.btn} ${styles.btnEdit}`}
        onClick={function () {
          handleOpen(todo, "edit");
        }}
      >
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button
        className={`${styles.btn} ${styles.btnDelete}`}
        onClick={function () {
          handleOpen(todo, "delete");
        }}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default ListItem;
