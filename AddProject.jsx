import React, { useRef, useState } from "react";
import AddProjectInputs from "./AddProjectInputs";
import Modal from "./Modal";

const AddProject = ({ onAddProject, onCancelProject }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2>Invalid Input</h2>
        <p>Please provide value for every input</p>
      </Modal>
      <div className="w-[35rem] mt-9">
        <div>
          <AddProjectInputs ref={title} labels="Title" />
          <AddProjectInputs ref={description} labels="Description" textarea />
          <AddProjectInputs type="date" ref={dueDate} labels="Due Date" />
        </div>
        <menu className="flex gap-2 items-center justify-end my-4 ">
          <li>
            <button
              onClick={onCancelProject}
              className="text-sm text-stone-600 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-black text-sm rounded text-white px-2 py-1"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
      </div>
    </>
  );
};

export default AddProject;
