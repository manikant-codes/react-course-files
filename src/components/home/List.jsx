import React, { useEffect, useState } from "react";
import { getAllTodos, updateTodo } from "../../services/apiServices";
import styles from "../../styles/home/list.module.css";
import Modal from "../common/Modal";
import AddTodo from "./AddTodo";
import EditTodoForm from "./EditTodoForm";
import ListItem from "./ListItem";
import FiltersBar from "./FiltersBar";

function List() {
  const [todos, setTodos] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getAll() {
      const result = await getAllTodos();
      setTodos(result.data);
    }
    getAll();
  }, []);

  // Update Modal
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [task, setTask] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function handleCancel() {
    setSelectedTodo(null);
    setShowModal(false);
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
      <FiltersBar setTodos={setTodos} />
      <AddTodo todos={todos} setTodos={setTodos} />
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
          content={
            <EditTodoForm
              selectedTodo={selectedTodo}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              task={task}
              setTask={setTask}
            />
          }
          btnTextOk="Submit"
          onSubmit={handleSubmit}
          btnTextCancel="Cancel"
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}

export default List;
