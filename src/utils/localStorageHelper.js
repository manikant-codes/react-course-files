function addToLocalStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function deleteFromLocalStorage(key) {
  window.localStorage.removeItem(key);
}

function getFromLocalStorage(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

export { addToLocalStorage, deleteFromLocalStorage, getFromLocalStorage };
