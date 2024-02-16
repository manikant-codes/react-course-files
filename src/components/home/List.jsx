import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import styles from "../../styles/home/list.module.css";
import AddTodo from "./AddTodo";
import { getAllTodos } from "../../services/apiServices";
import Modal from "../common/Modal";
import EditTodoForm from "./EditTodoForm";

function List() {
  const [todos, setTodos] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  console.log("rerendered");

  useEffect(() => {
    async function getAll() {
      const result = await getAllTodos();
      setTodos(result.data);
    }

    getAll();
  }, []);

  function handleCancel() {
    setShowModal((prev) => !prev);
  }

  function handleSubmit() {}

  if (!todos) return null;

  return (
    <div className={styles.container}>
      <AddTodo setTodos={setTodos} todos={todos} />
      <div className={styles.innerContainer}>
        {todos.map((todo) => {
          return (
            <ListItem
              key={todo._id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              setShowModal={setShowModal}
              setSelectedTodo={setSelectedTodo}
            />
          );
        })}
      </div>
      {showModal && (
        <Modal
          title="Edit Todo"
          btnTextOk="Submit"
          btnTextCancel="Cancel"
          content={<EditTodoForm selectedTodo={selectedTodo} />}
          onCancel={handleCancel}
          // onSubmit={}
        />
      )}
    </div>
  );
}

export default List;
