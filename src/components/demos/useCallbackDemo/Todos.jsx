import React, { memo } from "react";

function Todos(props) {
  const { todos, addTodo } = props;
  console.log("Child Rendered");
  return (
    <div>
      <h2 style={{ marginBottom: "16px" }}>My Todos</h2>
      {todos.map((todo, index) => {
        return (
          <p
            key={index}
            style={{
              backgroundColor: "rgba(255, 255, 255)",
              padding: "4px 8px",
              borderRadius: "8px",
              boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
            }}
          >
            {todo}
          </p>
        );
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default memo(Todos);
