import React from "react";
import AddTasks from "./AddTasks";

const TaskDetails = ({
  selectedProject,
  deleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  const formattedDate = new Date(selectedProject.dueDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-blue-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{selectedProject.title}</h1>
          <button
            onClick={deleteProject}
            className="text-white rounded-md w-16 h-8 px-2 bg-black"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-blue-300">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {selectedProject.description}
        </p>
      </header>
      <AddTasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
};

export default TaskDetails;
