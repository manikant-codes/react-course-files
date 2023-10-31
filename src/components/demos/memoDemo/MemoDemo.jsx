import React, { useState } from "react";
import ToDoList from "./ToDoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/MemoDemo.module.css";

function MemoDemo() {
  const [toDos, setToDos] = useState(["One", "Two"]);

  const [count, setCount] = useState(0);

  return (
    <div className="demoContainer">
      <div className="demoWrapper" style={{ flexDirection: "column" }}>
        <div className={`${styles.toDosWrapper}`}>
          <ToDoList toDos={toDos} />
          <button onClick={() => setToDos((todo) => [...todo, "New Item"])}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className={`${styles.counterWrapper}`}>
          <button onClick={() => setCount((c) => c + 1)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <p>Count: {count}</p>
        </div>
      </div>
    </div>
  );
}

export default MemoDemo;
