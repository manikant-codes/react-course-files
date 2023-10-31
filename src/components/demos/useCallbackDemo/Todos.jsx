import React, { memo } from "react";
import styles from "../../../styles/UseCallbackDemo.module.css";

function ToDos(props) {
  const { todos, addTodo } = props;
  console.log("Child Rendered");
  return (
    <div className={`${styles.toDosWrapper}`}>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default memo(ToDos);
