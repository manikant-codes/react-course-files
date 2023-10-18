import React, { useState } from "react";
import ToDoList from "./ToDoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function MemoDemo() {
  const [toDos, setToDos] = useState(["One", "Two"]);
  const [count, setCount] = useState(0);
  console.log("MemoDemo Re-rendered");
  return (
    <div className="demoContainer">
      <div className="demoWrapper" style={{ flexDirection: "column" }}>
        <div>
          <ToDoList toDos={toDos} />
          <button onClick={() => setToDos((todo) => [...todo, "New Item"])}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div>
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
