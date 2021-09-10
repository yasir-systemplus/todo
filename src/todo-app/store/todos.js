import { createAction, createReducer } from "@reduxjs/toolkit";

export const addTodo = createAction("addTodo");
export const deleteTodo = createAction("deleteTodo");
export const moveTodo = createAction("moveTodo");
export const seedTodos = createAction("seedTodos");

export default createReducer([], {
  [addTodo.type]: (todos, action) => {
    todos.push(action.payload);
  },
  [deleteTodo.type]: (todos, action) => {
    return todos.filter((todo) => todo.id != action.payload.id);
  },
  [moveTodo.type]: (todos, action) => {
    const todo = todos.find((t) => t.id == action.payload.id);
    todo.type = action.payload.type;
  },
});
