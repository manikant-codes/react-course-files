import React, { useState } from "react";
import styles from "../../../styles/todos/todoList.module.css";
import Modal from "../../common/Modal";
import AddEditTodoForm from "./AddEditTodoForm";
import DeleteConfirmation from "./DeleteConfirmation";
import ListItem from "./ListItem";

function TodoList(props) {
  const { data, fetchAllTodos } = props;
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isOpen, setIsOpen] = useState({ isOpen: false, action: "" });

  const isListEmpty = data.length === 0;

  function handleOpen(todo, action) {
    setIsOpen({ isOpen: true, action });
    setSelectedTodo(todo);
  }

  async function handleClose(refetch) {
    setIsOpen({ isOpen: false, action: "" });
    setSelectedTodo(null);
    if (refetch) {
      await fetchAllTodos();
    }
  }

  return (
    <div className={styles.todoListContainer}>
      {isListEmpty ? (
        <p>No tasks to show!</p>
      ) : (
        data.map(function (todo) {
          return (
            <ListItem
              key={todo._id}
              todo={todo}
              handleOpen={handleOpen}
              fetchAllTodos={fetchAllTodos}
            />
          );
        })
      )}
      {isOpen.isOpen && (
        <Modal
          title={isOpen.action === "edit" ? "Update Todo" : "Confirmation"}
          handleClose={handleClose}
          content={
            isOpen.action === "edit" ? (
              <AddEditTodoForm
                selectedTodo={selectedTodo}
                handleClose={handleClose}
              />
            ) : (
              <DeleteConfirmation
                selectedTodo={selectedTodo}
                handleClose={handleClose}
              />
            )
          }
        />
      )}
    </div>
  );
}

export default TodoList;
