import React, { useState } from "react";
import Todo from "./todo";
import Modal from "../modal";
import Mocker from "./mocker";

export default function Column({
  todos,
  length,
  title,
  type,
  onMove,
  onAddTodo,
  onDelete,
}) {
  const [modal, setModal] = useState(false);

  const toggleModal = (key) => {
    setModal(key);
  };

  const captureDragOver = (ev) => {
    ev.preventDefault();
  };

  const handleDrop = (ev) => {
    ev.preventDefault();
    const id = ev.dataTransfer.getData("id");
    onMove(id, type);
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
        onDrop={handleDrop}
      >
        <header className="mb-2">
          <div className="flex flex-row justify-between items-center">
            <div className="font-semibold">{title}</div>
            <p className="bg-gray-300 text-gray-500 text-sm rounded-lg px-2 py-1/2">
              {todos.length}
            </p>
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
            <Todo key={todo.id} todo={todo} onDelete={() => onDelete(todo)} />
          ))}

          {length > 0 && <Mocker />}
        </div>
      </div>
    </React.Fragment>
  );
}
