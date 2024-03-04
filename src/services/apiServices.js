import { getFromLocalStorage } from "../utils/localStorageHelper";

export async function getAllTodos(query = "") {
  const auth = getFromLocalStorage("token");
  if (!auth) throw new Error("No token found!");
  let url = query
    ? "http://localhost:5000/todos?" + query
    : "http://localhost:5000/todos";
  const response = await fetch(url, {
    headers: {
      authorization: "Bearer " + auth.token,
    },
  });
  const data = await response.json();
  return data;
}

export async function getTodo() {}

export async function addTodo(todo) {
  const auth = getFromLocalStorage("token");
  if (!auth) throw new Error("No token found!");
  const response = await fetch("http://localhost:5000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + auth.token,
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
}

export async function updateTodo(id, todo) {
  const auth = getFromLocalStorage("token");
  if (!auth) throw new Error("No token found!");
  const response = await fetch(`http://localhost:5000/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + auth.token,
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
}

export async function deleteTodo(id) {
  const auth = getFromLocalStorage("token");
  if (!auth) throw new Error("No token found!");
  const response = await fetch(`http://localhost:5000/todos/${id}`, {
    method: "DELETE",
    headers: {
      authorization: "Bearer " + auth.token,
    },
  });
  const data = await response.json();
  return data;
}

export async function userSignup(credentials) {
  const response = await fetch(`http://localhost:5000/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  return data;
}

export async function userLogin(credentials) {
  console.log("JSON.stringify(credentials)", JSON.stringify(credentials));
  const response = await fetch(`http://localhost:5000/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  return data;
}

export async function userLogout() {
  const auth = getFromLocalStorage("token");
  if (!auth) throw new Error("No token found!");
  const response = await fetch(`http://localhost:5000/auth/logout`, {
    headers: {
      authorization: "Bearer " + auth.token,
    },
  });
  const data = await response.json();
  return data;
}

export async function getStats() {
  const auth = getFromLocalStorage("token");
  if (!auth) throw new Error("No token found!");
  const response = await fetch(`http://localhost:5000/dashboard`, {
    headers: {
      authorization: "Bearer " + auth.token,
    },
  });
  const data = await response.json();
  return data;
}
