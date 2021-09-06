import React, { useState } from "react";
import Column from "./components/column";

export default function SPLTodos(props) {
  const [todos, setTodos] = useState([]);

  const handleOnAddTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
  };

  const moveElement = (id, type) => {
    const updatedTodos = todos.map((todo) => {
      if (id == todo.id) {
        todo.type = type;
      }

      return todo;
    });

    setTodos([...updatedTodos]);
  };

  console.log(todos);
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
            />
            <Column
              title="👨‍💻 In Progress"
              todos={todos.filter((t) => t.type === "progress")}
              onAddTodo={handleOnAddTodo}
              type="progress"
              onMove={moveElement}
              length={todos.length}
            />
            <Column
              title="🏁 Finished"
              todos={todos.filter((t) => t.type === "finished")}
              onAddTodo={handleOnAddTodo}
              type="finished"
              onMove={moveElement}
              length={todos.length}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
