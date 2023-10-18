import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useState } from "react";
import Todos from "./Todos";

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["New Todo"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <div className="demoContainer">
      <div className="demoWrapper" style={{ gap: "32px" }}>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <button onClick={increment}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <p style={{ margin: "0px" }}>Count: {count}</p>
        </div>
        <hr />
        <div>
          <Todos todos={todos} addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default UseCallbackDemo;
