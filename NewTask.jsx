import React, { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");

  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleClick = () => {
    onAdd(enteredTask);
    setEnteredTask("");
  };
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-full p-1 border-b-2 rounded border-blue-200 bg-blue-100 text-black focus:outline-none focus:border-blue-300 h-8 text-sm"
        value={enteredTask}
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        className="text-white rounded-md w-24 h-8 px-2 bg-black"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
