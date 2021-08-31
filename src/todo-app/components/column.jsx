import React, { useState } from "react";
import { Todo } from "./todo";
import Modal from "../modal";

export default function Column({ todos, onAddTodo, title, type }) {
  const [modal, setModal] = useState(false);

  const toggleModal = (key) => {
    setModal(key);
  };

  const captureDragOver = (ev) => {
    console.log("Drag Over: ", type);
  };

  return (
    <React.Fragment>
      {modal && (
        <Modal
          onAddTodo={(todo) => onAddTodo({ ...todo, type: type })}
          open={modal}
          onToggle={toggleModal}
        />
      )}
      <div
        className="flex-1 bg-gray-100 rounded-sm p-2 dragover"
        onDragOver={captureDragOver}
      >
        <header className="mb-2">
          <div className="flex flex-row justify-between items-center">
            <div className="font-semibold">{title}</div>
            <div className="bg-gray-300 text-gray-500 rounded-lg px-2">
              {todos.length}
            </div>
          </div>
          <div
            onClick={() => setModal(true)}
            className="bg-gray-300 text-gray-500 rounded-lg px-2 text-center tex-lg my-2 hover:shadow-sm"
          >
            +
          </div>
        </header>
        <div>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
