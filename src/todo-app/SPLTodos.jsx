import React, { useEffect } from "react";
import Column from "./components/column";
import useLocalStorage from "./hooks/useLocalStorage";
import { addTodo, moveTodo, deleteTodo } from "./store/todos";
import store from "./store/store";

export default function SPLTodos() {
  const [todos, setTodos] = useLocalStorage("todos", []);

  useEffect(() => {
    const sub = store.subscribe(() => {
      setTodos(store.getState());
    });

    return () => {
      sub();
    };
  }, [store.getState()]);

  const handleOnAddTodo = (todo) => {
    store.dispatch(addTodo({ ...todo, id: Date.now() }));
  };

  const moveElement = (id, type) => {
    store.dispatch(moveTodo({ id, type }));
  };

  const handleOnDelete = (todo) => {
    store.dispatch(deleteTodo({ id: todo.id }));
  };

  return (
    <React.Fragment>
      <div className="bg-gray-200 min-h-screen ">
        <div className="container shadow-md relative top-9 rounded-md p-4 bg-gray-50 w-2/3 mx-auto">
          <h1 className="text-xl font-bold">System Plus Todo App</h1>

          <div className="flex flex-row space-x-2 mt-5">
            <Column
              title="💡 Ideas"
              todos={todos.filter((t) => t.type === "ideas")}
              onAddTodo={handleOnAddTodo}
              type="ideas"
              onMove={moveElement}
              length={todos.length}
              onDelete={handleOnDelete}
            />
            <Column
              title="👨‍💻 In Progress"
              todos={todos.filter((t) => t.type === "progress")}
              onAddTodo={handleOnAddTodo}
              type="progress"
              onMove={moveElement}
              length={todos.length}
              onDelete={handleOnDelete}
            />

            <Column
              title="🏁 Finished"
              todos={todos.filter((t) => t.type === "finished")}
              onAddTodo={handleOnAddTodo}
              type="finished"
              onMove={moveElement}
              onDelete={handleOnDelete}
              length={todos.length}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
