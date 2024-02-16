function EditTodoForm(props) {
  const { selectedTodo } = props;
  console.log(selectedTodo);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <p>Is Completed</p>
        <input
          type="checkbox"
          checked={selectedTodo.isCompleted}
          style={{ width: "20px", height: "20px" }}
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
        <input type="text" value={selectedTodo.text} />
      </div>
    </div>
  );
}

export default EditTodoForm;
