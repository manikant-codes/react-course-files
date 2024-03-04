import { faPaperPlane, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { addTodo, updateTodo } from "../../../services/apiServices";
import styles from "../../../styles/todos/addEditTodoForm.module.css";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

function AddEditTodoForm(props) {
  const { selectedTodo, handleClose } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(0);

  const operation = selectedTodo ? "update" : "add";

  const initialState =
    operation === "update"
      ? {
          isCompleted: selectedTodo.isCompleted,
          text: selectedTodo.text,
        }
      : {
          isCompleted: false,
          text: "",
        };

  const [formState, setFormState] = useState(initialState);

  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]:
        e.target.name === "isCompleted" ? e.target.checked : e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      if (operation === "update") {
        await updateTodo(selectedTodo._id, formState);
      } else {
        await addTodo(formState);
      }
      setError(-1);
    } catch (error) {
      setError(1);
    } finally {
      setLoading(false);
      // Delay to show success message before closing the modal.
      setTimeout(function () {
        handleClose(true);
      }, 1000);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formFieldContainer}>
          <label htmlFor="text">Task</label>
          <input
            id="text"
            name="text"
            type="text"
            value={formState.text}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formFieldContainer}>
          <label htmlFor="isCompleted">Is Completed</label>
          <input
            id="isCompleted"
            name="isCompleted"
            type="checkbox"
            checked={formState.isCompleted}
            onChange={handleChange}
          />
        </div>
        {error === 1 && (
          <p className={`${styles.outputPara} ${styles.errorPara}`}>
            <FontAwesomeIcon icon={faWarning} /> Something went wrong!
          </p>
        )}
        {error === -1 && (
          <p className={`${styles.outputPara} ${styles.successPara}`}>
            <FontAwesomeIcon icon={faCheckCircle} /> Success!
          </p>
        )}
        <button type="submit" className={styles.submitBtn}>
          <FontAwesomeIcon icon={faPaperPlane} />
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default AddEditTodoForm;
