import * as actions from "./actionTypes";

export function addTodo(todo) {
  return { type: actions.ADD_TODO, payload: todo };
}

export function deleteTodo(id) {
  console.log("Id", id);
  return { type: actions.DELETE_TODO, payload: { id } };
}

export function movedTodo(id, type) {
  return {
    type: actions.MOVE_TODO,
    payload: {
      id,
      type,
    },
  };
}
