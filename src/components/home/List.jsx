import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import styles from "../../styles/home/list.module.css";
import AddTodo from "./AddTodo";
import { getAllTodos, updateTodo } from "../../services/apiServices";
import Modal from "../common/Modal";
import EditTodoForm from "./EditTodoForm";

function List() {
  const [todos, setTodos] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [selectedTodo, setSelectedTodo] = useState(null);
  const [task, setTask] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  console.log("todos", todos);

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

  async function handleSubmit() {
    const response = await updateTodo(selectedTodo._id, {
      text: task,
      isCompleted: isChecked,
    });

    const updatedTodos = todos.map((todo) => {
      if (todo._id === selectedTodo._id) {
        return { ...todo, isCompleted: isChecked, text: task };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);

    handleCancel();
  }

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
          content={
            <EditTodoForm
              selectedTodo={selectedTodo}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              task={task}
              setTask={setTask}
            />
          }
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default List;
