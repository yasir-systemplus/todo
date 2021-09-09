import * as actions from "./actionTypes";

export default function reducer(state = [], { type, payload }) {
  switch (type) {
    case actions.ADD_TODO:
      return [...state, { ...payload }];

    case actions.DELETE_TODO:
      return state.filter((todo) => todo.id != payload.id);

    case actions.MOVE_TODO: {
      return state.map((todo) => {
        if (todo.id == payload.id) {
          todo.type = payload.type;
        }

        return todo;
      });
    }

    default:
      return state;
  }
}
