/* eslint-disable eqeqeq */
import { addTodo, deleteTodo, loadAllTodos, moveTodo } from "../todos";

const localStorageMid =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type === addTodo.type) {
      const updatedTodos = [...getState(), action.payload];

      saveLocalStorage(updatedTodos);
    }

    if (action.type === deleteTodo.type) {
      const localState = getState();

      const afterDeletion = localState.filter(
        (todo) => todo.id != action.payload.id
      );

      saveLocalStorage(afterDeletion);
    }

    if (action.type === moveTodo.type) {
      const localState = getLocalStorage();
      const updated = localState.map((todo) => {
        if (todo.id == action.payload.id) {
          todo.type = action.payload.type;
        }

        return todo;
      });

      saveLocalStorage(updated);
    }

    // if (action.type === loadAllTodos.type) {
    //   action.payload = getLocalStorage();
    // }

    next(action);
  };

function getLocalStorage() {
  const localData = localStorage.getItem("todos");

  if (!localData) return [];

  return JSON.parse(localData);
}

function saveLocalStorage(data) {
  localStorage.setItem("todos", JSON.stringify(data));
}

export default localStorageMid;
