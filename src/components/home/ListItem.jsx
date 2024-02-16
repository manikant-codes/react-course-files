import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "../../styles/home/listItem.module.css";
import { deleteTodo, updateTodo } from "../../services/apiServices";

function ListItem(props) {
  const [checked, setChecked] = useState(props.todo.isCompleted);

  async function handleChecked(e) {
    await updateTodo(props.todo._id, {
      ...props.todo,
      isCompleted: e.target.checked,
    });

    setChecked(!e.target.checked);
  }

  async function handleDelete() {
    await deleteTodo(props.todo._id);
    const updatedTodos = props.todos.filter((todo) => {
      if (todo._id === props.todo._id) {
        return false;
      } else {
        return true;
      }
    });

    props.setTodos(updatedTodos);
  }

  function handleUpdate() {
    props.setShowModal((prev) => !prev);
    props.setSelectedTodo(props.todo);
  }

  return (
    <div className={styles.container}>
      <input type="checkbox" checked={checked} onChange={handleChecked} />
      <p>{props.todo.text}</p>
      <button onClick={handleUpdate}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default ListItem;
