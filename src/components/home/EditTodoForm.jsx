import { useEffect } from "react";

function EditTodoForm(props) {
  useEffect(() => {
    props.setIsChecked(props.selectedTodo.isCompleted);
    props.setTask(props.selectedTodo.text);
  }, []);

  function handleCheck(e) {
    props.setIsChecked(e.target.checked);
  }

  function handleTask(e) {
    props.setTask(e.target.value);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <p>Is Completed</p>
        <input
          type="checkbox"
          checked={props.isChecked}
          style={{ width: "20px", height: "20px" }}
          onChange={handleCheck}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "8px",
        }}
      >
        <p>Task</p>
        <input type="text" value={props.task} onChange={handleTask} />
      </div>
    </div>
  );
}

export default EditTodoForm;
