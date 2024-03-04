import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import ActionTitle from "../components/common/ActionTitle";
import Modal from "../components/common/Modal";
import AddEditTodoForm from "../components/todos/todoList/AddEditTodoForm";
import TodoList from "../components/todos/todoList/TodoList";
import { getAllTodos } from "../services/apiServices";
import styles from "../styles/todos/todos.module.css";
import FiltersBar from "../components/todos/filtersBar/FiltersBar";

function Todos() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchAllTodos = useCallback(async function (query) {
    try {
      setLoading(true);
      const result = await getAllTodos(query);
      setData(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(
    function () {
      async function fetchData() {
        await fetchAllTodos();
      }
      fetchData();
    },
    [fetchAllTodos]
  );

  function handleOpen() {
    setIsOpen(true);
  }

  async function handleClose(refetch) {
    setIsOpen(false);
    if (refetch) {
      await fetchAllTodos();
    }
  }

  if (loading) return <p>Loading...</p>;

  if ((!loading && error) || !data) return <p>Something went wrong!</p>;

  return (
    <div className={styles.todosContainer}>
      <ActionTitle
        title="To-Dos"
        button={
          <button onClick={handleOpen}>
            <FontAwesomeIcon icon={faAdd} />
            Add Task
          </button>
        }
      />
      <FiltersBar fetchAllTodos={fetchAllTodos} />
      <TodoList data={data} fetchAllTodos={fetchAllTodos} />
      {isOpen && (
        <Modal
          title="Add To-Do"
          handleClose={handleClose}
          content={<AddEditTodoForm handleClose={handleClose} />}
        />
      )}
    </div>
  );
}

export default Todos;
