/* eslint-disable eqeqeq */
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (todos, action) => {
      todos.push(action.payload);
    },
    deleteTodo: (todos, action) => {
      return todos.filter((todo) => todo.id != action.payload.id);
    },
    moveTodo: (todos, action) => {
      const todo = todos.find((t) => t.id === +action.payload.id);
      todo.type = action.payload.type;
    },
    loadAllTodos: (todos, action) => {
      return todos.concat(action.payload);
    },
  },
});

//Memoized Selectors
export const getInProgress = createSelector(
  (state) => state,
  (todos) => todos.filter((t) => t.type === "progress")
);

export const getFinished = createSelector(
  (state) => state,
  (todos) => todos.filter((t) => t.type === "finished")
);

export const getIdeas = createSelector(
  (state) => state,
  (todos) => todos.filter((t) => t.type === "ideas")
);

export const getAll = createSelector(
  (state) => state,
  (todos) => todos
);

export const { addTodo, deleteTodo, moveTodo, loadAllTodos } = slice.actions;
export default slice.reducer;
