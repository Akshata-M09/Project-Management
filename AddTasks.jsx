import React, { useState } from "react";
import NewTask from "./NewTask";

const AddTasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <div>
      <h1 className="font-bold text-xl text-stone-700 mb-4">Tasks</h1>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone mb-2 ml-20 mt-12">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-2 mt-6 rounded-md bg-blue-100 border-2 border-blue-400">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-2">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
      <ul></ul>
    </div>
  );
};

export default AddTasks;
