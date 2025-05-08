import React, { useState } from "react";
import Sidebar from "./Sidebar";
import NoProjectSelected from "./NoProjectSelected";
import AddProject from "./AddProject";
import TaskDetails from "./TaskDetails";
const HomePage = () => {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleCancelProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectedProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };
  console.log("select", projectsState);
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  const handleDeleteProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  let content = (
    <TaskDetails
      selectedProject={selectedProject}
      deleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks.filter(
        (task) => task.projectId === projectsState.selectedProjectId
      )}
    />
  );
  if (projectsState.selectedProjectId === null) {
    content = (
      <AddProject
        onAddProject={handleAddProject}
        onCancelProject={handleCancelProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <div className="flex ">
      <div>
        <Sidebar
          onStartAddProject={handleStartAddProject}
          data={projectsState.projects}
          onSelectedProject={handleSelectedProject}
          selectedProjectId={projectsState.selectedProjectId}
        />
      </div>
      <div className="mx-auto">{content}</div>
    </div>
  );
};

export default HomePage;
