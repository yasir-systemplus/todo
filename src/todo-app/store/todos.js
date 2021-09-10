import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction("addTodo");
export const deleteTodo = createAction("deleteTodo");
export const moveTodo = createAction("moveTodo");

export default function reducer(state = [], { type, payload }) {
  switch (type) {
    case addTodo.type:
      return [...state, payload];

    case deleteTodo.type:
      return state.filter((todo) => todo.id != payload.id);

    case moveTodo.type: {
      return state.map((todo) => {
        if (todo.id == +payload.id) {
          return { ...todo, type: payload.type };
        }

        return todo;
      });
    }

    default:
      return state;
  }
}
