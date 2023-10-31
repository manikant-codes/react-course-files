import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useState } from "react";
import styles from "../../../styles/UseCallbackDemo.module.css";
import ToDos from "./ToDos";

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["New Todo"]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prevTodos) => [...prevTodos, "New Item"]);
  }, []);

  return (
    <div className="demoContainer">
      <div className="demoWrapper" style={{ gap: "32px" }}>
        <div className={`${styles.counterWrapper}`}>
          <button onClick={increment}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <p style={{ margin: "0px" }}>Count: {count}</p>
        </div>
        <div>
          <ToDos todos={todos} addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default UseCallbackDemo;
