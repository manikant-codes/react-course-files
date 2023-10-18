import React, { memo } from "react";

function ToDoList(props) {
  console.log("List Rendered");
  return (
    <div>
      <ul>
        {props.toDos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default memo(ToDoList);
