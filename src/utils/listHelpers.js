function addTask() {}

function updateTask(list, id, isChecked, task) {
  return list.map((todo) => {
    if (todo._id === id) {
      return { ...todo, isCompleted: isChecked, text: task };
    } else {
      return todo;
    }
  });
}

function deleteTask() {}

export { addTask, updateTask, deleteTask };
