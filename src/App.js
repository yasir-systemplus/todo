/* eslint-disable jsx-a11y/anchor-is-valid */
import Counter from "./counter/counter";
import DatePractise from "./date";
import Set from "./sets/Set";
import SPLTodos from "./todo-app/SPLTodos";
import Table from "./pagination/table";
import React, { useState } from "react";

/**
 ** App js is used to configure different projects.
 * TODO: Todos project
 * TODO: Counter project(Life Cycle Hooks)
 * TODO: Working on Data (Pagination, sorting, filtering)
 */

function App() {
  const [selector, setSelector] = useState("todos");

  const selectedComponent = () => {
    switch (selector) {
      case "todos":
        return <SPLTodos />;
      case "table":
        return <Table />;
      case "counter":
        return <Counter />;
      default:
        break;
    }
  };

  const buttonStyles = (color) => {
    return `px-5 text-white rounded-sm bg-${color}-400`;
  };

  return (
    <React.Fragment>
      <div className="flex flex-row justify-center space-x-10 ">
        <a
          className={buttonStyles("red")}
          onClick={() => {
            setSelector("todos");
          }}
        >
          Todos
        </a>
        <a
          className={buttonStyles("blue")}
          onClick={() => {
            setSelector("table");
          }}
        >
          Operations on Table
        </a>
        <a
          className={buttonStyles("green")}
          onClick={() => {
            setSelector("counter");
          }}
        >
          Hooks
        </a>
      </div>
      {selectedComponent()}
    </React.Fragment>
  );
}

export default App;
