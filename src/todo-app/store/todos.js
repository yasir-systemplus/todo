import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (todos, action) => {
      todos.push(action.payload);
    },
    deleteTodo: (todos, action) => {
      todos = todos.filter((todo) => todo.id != action.payload.id);
    },
    moveTodo: (todos, action) => {
      const todo = todos.find((t) => t.id === +action.payload.id);
      todo.type = action.payload.type;
    },
  },
});

export const { addTodo, deleteTodo, moveTodo } = slice.actions;
export default slice.reducer;
