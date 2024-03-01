export async function getAllTodos(query = "") {
  let url = query
    ? "http://localhost:5000/todos?" + query
    : "http://localhost:5000/todos";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getTodo() {}

export async function addTodo(todo) {
  const response = await fetch("http://localhost:5000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
}

export async function updateTodo(id, todo) {
  const response = await fetch(`http://localhost:5000/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
}

export async function deleteTodo(id) {
  const response = await fetch(`http://localhost:5000/todos/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
