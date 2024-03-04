import { useState } from "react";
import { updateTodo } from "../../services/apiServices";
import { updateTask } from "../../utils/listHelpers";

function EditTodoForm(props) {
  const { selectedTodo, setSelectedTodo, setShowModal, data, setData } = props;
  const [task, setTask] = useState(selectedTodo.text);
  const [isChecked, setIsChecked] = useState(selectedTodo.isCompleted);

  function handleCancel() {
    setSelectedTodo(null);
    setShowModal(false);
  }

  async function handleSubmit() {
    await updateTodo(selectedTodo._id, {
      text: task,
      isCompleted: isChecked,
    });
    const updatedTodos = updateTask(data, selectedTodo._id, isChecked, task);
    setData(updatedTodos);
    handleCancel();
  }

  function handleCheck(e) {
    setIsChecked(e.target.checked);
  }

  function handleTask(e) {
    setTask(e.target.value);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <p>Is Completed</p>
        <input
          type="checkbox"
          checked={isChecked}
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
        <input type="text" value={task} onChange={handleTask} />
      </div>
      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
}

export default EditTodoForm;
