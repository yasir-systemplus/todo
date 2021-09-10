import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Tag from "../components/tag";
import { Dialog, Transition } from "@headlessui/react";
import randomColor from "../shared";
import * as Yup from "yup";

import { Form, Field, Formik, FieldArray, ErrorMessage } from "formik";

export default function Modal({ onAddTodo, open, onToggle }) {
  const formData = { title: "", tags: [] };

  const schema = Yup.object({
    title: Yup.string()
      .required("Description is required.")
      .label("Description"),
    tags: Yup.array()
      .of(
        Yup.object().shape({
          title: Yup.string().required("Tag is required.").label("Title"),
        })
      )
      .min(1, "Minimum one tag is required.")
      .label("Title"),
  });

  const handleTagsEnter = (tagsProps, ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      const tag = ev.target.value;

      if (!tag) return;
      tagsProps.push({ id: Date.now(), title: tag, color: randomColor() });
      ev.target.value = "";
    }
  };

  const handleAddTodo = (todo, ev) => {
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
              <Formik
                initialValues={formData}
                onSubmit={handleAddTodo}
                validationSchema={schema}
              >
                <Form>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="flex flex-col px-6 py-5 bg-gray-50">
                      <p className="mb-2 font-semibold text-gray-700">Todo</p>
                      <div className="mb-2">
                        <Field
                          as="textarea"
                          type="text"
                          name="title"
                          placeholder="Type description"
                          className="p-2 bg-white min-w-full border border-gray-200 rounded shadow-sm h-36"
                        />
                        <ErrorMessage
                          component="div"
                          className=" text-red-600"
                          name="title"
                        />
                      </div>

                      <FieldArray name="tags">
                        {(tagsProps) => {
                          const {
                            remove,
                            form: {
                              values: { tags },
                            },
                          } = tagsProps;

                          return (
                            <React.Fragment>
                              <p className="mb-2 font-semibold text-gray-700">
                                Tags
                              </p>
                              <div className="flex flex-row items-center justify-between  bg-white border border-gray-200 rounded shadow-sm">
                                <input
                                  type="text"
                                  className="w-full p-2"
                                  onKeyPress={(ev) =>
                                    handleTagsEnter(tagsProps, ev)
                                  }
                                />
                              </div>
                              <ErrorMessage
                                component="div"
                                name="tags"
                                className="text-red-500"
                              />

                              <div className="flex flex-row items-center justify-start flex-wrap space-y-2 mt-3">
                                {tags.map((t, index) => (
                                  <Tag
                                    key={index}
                                    title={t.title}
                                    color={t.color}
                                    onDelete={() => remove(index)}
                                  >
                                    <ErrorMessage
                                      name={`tags.${index}.title`}
                                    />
                                  </Tag>
                                ))}
                              </div>
                            </React.Fragment>
                          );
                        }}
                      </FieldArray>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gree-500 sm:ml-3 sm:w-auto sm:text-sm"
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
                </Form>
              </Formik>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>,
    document.getElementById("modal-portal")
  );
}
