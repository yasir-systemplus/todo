// import useLocalStorage from "./hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Column from "./components/column";
import {
  addTodo,
  moveTodo,
  deleteTodo,
  getFinished,
  getInProgress,
  getIdeas,
  loadAllTodos,
} from "./store/todos";

export default function SPLTodos() {
  const dispatch = useDispatch();
  const finished = useSelector(getFinished);
  const inProgress = useSelector(getInProgress);
  const ideas = useSelector(getIdeas);

  useEffect(() => {
    dispatch({
      type: "apiCall",
      payload: {
        url: "/todos",
        onSuccess: loadAllTodos.type,
      },
    });
  }, []);

  const handleOnAddTodo = (todo) => {
    //dispatch(addTodo({ ...todo, id: Date.now() }));

    dispatch({
      type: "apiCall",
      payload: {
        url: "/todos",
        method: "post",
        data: todo,
        onSuccess: addTodo.type,
      },
    });
  };

  const moveElement = (id, type) => {
    // dispatch(moveTodo({ id, type }));

    dispatch({
      type: "apiCall",
      payload: {
        url: "/todos/movetodo",
        method: "patch",
        data: { id, type },
        onSuccess: moveTodo.type,
      },
    });
  };

  const handleOnDelete = (todo) => {
    //dispatch(deleteTodo({ id: todo.id }));

    dispatch({
      type: "apiCall",
      payload: {
        url: "/todos/" + todo.id,
        method: "delete",
        onSuccess: deleteTodo.type,
      },
    });
  };

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("acha yr");
    }, 2000);
  });

  //Async Thunk
  dispatch(async (dispatch, getState) => {
    const messaeg = await promise;
    console.log(messaeg);
  });

  return (
    <React.Fragment>
      <div className="bg-gray-200 min-h-screen ">
        <div className="container shadow-md relative top-9 rounded-md p-4 bg-gray-50 w-2/3 mx-auto">
          <h1 className="text-xl font-bold">System Plus Todo App</h1>

          <div className="flex flex-row space-x-2 mt-5">
            <Column
              title="💡 Ideas"
              todos={ideas}
              onAddTodo={handleOnAddTodo}
              type="ideas"
              onMove={moveElement}
              onDelete={handleOnDelete}
            />

            <Column
              title="👨‍💻 In Progress"
              todos={inProgress}
              onAddTodo={handleOnAddTodo}
              type="progress"
              onMove={moveElement}
              onDelete={handleOnDelete}
            />

            <Column
              title="🏁 Finished"
              todos={finished}
              onAddTodo={handleOnAddTodo}
              type="finished"
              onMove={moveElement}
              onDelete={handleOnDelete}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
