import React, { useState } from "react";
import useFetch from "../../customHooks/useFetch";
import { getAllTodos } from "../../services/apiServices";
import styles from "../../styles/home/list.module.css";
import Modal from "../common/Modal";
import AddTodo from "./AddTodo";
import EditTodoForm from "./EditTodoForm";
import FiltersBar from "./FiltersBar";
import ListItem from "./ListItem";

function List() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const { loading, data, error, setData } = useFetch(getAllTodos);

  if (loading) return <h1>Loading...</h1>;

  if ((!loading && error) || !data) return <h1>Something went wrong!</h1>;

  return (
    <div className={styles.container}>
      <FiltersBar setTodos={setData} />
      <AddTodo todos={data} setTodos={setData} />
      <div className={styles.innerContainer}>
        {data.map((todo) => {
          return (
            <ListItem
              key={todo._id}
              todo={todo}
              todos={data}
              setTodos={setData}
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
              setShowModal={setShowModal}
              setSelectedTodo={setSelectedTodo}
              data={data}
              setData={setData}
            />
          }
          hideButtons
        />
      )}
    </div>
  );
}

export default List;
