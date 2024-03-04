import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../../styles/todos/deleteConfirmation.module.css";
import { deleteTodo } from "../../../services/apiServices";

function DeleteConfirmation(props) {
  const { selectedTodo, handleClose } = props;

  async function handleDelete() {
    await deleteTodo(selectedTodo._id);
    handleClose(true);
  }

  return (
    <div className={styles.container}>
      <p>Are you sure you want to delete this?</p>
      <div className={styles.buttonsContainer}>
        <button className={styles.butCancel} onClick={handleClose}>
          <FontAwesomeIcon icon={faClose} />
          Cancel
        </button>
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faCheck} />
          Confirm
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
