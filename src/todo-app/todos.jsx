import React, { useState } from "react";
import Column from "./components/column";

export default function Todos(props) {
  const [todos, setTodos] = useState([]);

  const handleOnAddTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
  };

  console.log(todos);
  return (
    <React.Fragment>
      <div className="bg-gray-200 min-h-screen">
        <div className="container shadow-md relative top-9 rounded-md p-4 bg-gray-50 w-2/3 mx-auto">
          <h1 className="text-xl font-bold">System Plus Todo App</h1>

          <div className="flex flex-row space-x-2 mt-5">
            <Column
              title="💡 Ideas"
              todos={todos.filter((t) => t.type === "ideas")}
              onAddTodo={handleOnAddTodo}
              type="ideas"
            />
            <Column
              title="👨‍💻 In Progress"
              todos={todos.filter((t) => t.type === "progress")}
              onAddTodo={handleOnAddTodo}
              type="progress"
            />
            <Column
              title="🏁 Finished"
              todos={todos.filter((t) => t.type === "finished")}
              onAddTodo={handleOnAddTodo}
              type="finished"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
