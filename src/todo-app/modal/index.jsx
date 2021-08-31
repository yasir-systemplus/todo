import React, { Fragment, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Tag from "../components/tag";
import { Dialog, Transition } from "@headlessui/react";
import randomColor from "../shared";

export default function Modal({ onAddTodo, open, onToggle }) {
  const tagInput = useRef(null);
  const [todo, setTodo] = useState({ title: "", tags: [] });

  const handleTagsEnter = (e) => {
    const tag = tagInput.current.value;
    if (e.key !== "Enter") return;

    if (!tag) return;

    setTodo({
      ...todo,
      tags: [...todo.tags, { title: tag.trim(), id: Date.now() }],
    });

    tagInput.current.value = "";
  };

  const handleDeleteTag = (id) => {
    setTodo((prev) => {
      return { ...prev, tags: prev.tags.filter((t) => t.id !== id) };
    });
  };

  const handleTodoDescription = (event) => {
    const description = event.target.value;

    if (!description) return;

    setTodo({ ...todo, title: description.trim() });
  };

  const handleAddTodo = () => {
    if (!todo.title) return;
    onAddTodo(todo);
    onToggle(false);
  };

  return ReactDOM.createPortal(
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={onToggle}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex flex-col px-6 py-5 bg-gray-50">
                  <p className="mb-2 font-semibold text-gray-700">Todo</p>
                  <textarea
                    type="text"
                    name=""
                    placeholder="Type description"
                    className="p-2 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
                    onChange={handleTodoDescription}
                  />
                  <p className="mb-2 font-semibold text-gray-700">Tags</p>
                  <div className="flex flex-row items-center justify-between  bg-white border border-gray-200 rounded shadow-sm">
                    <input
                      type="text"
                      className="w-full p-2"
                      ref={tagInput}
                      onKeyDown={handleTagsEnter}
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start mt-3">
                    {todo.tags.map((t) => (
                      <Tag
                        key={t.id}
                        title={t.title}
                        color={randomColor()}
                        onDelete={() => handleDeleteTag(t.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gree-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleAddTodo}
                >
                  Add Todo
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => onToggle(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>,
    document.getElementById("modal-portal")
  );
}
