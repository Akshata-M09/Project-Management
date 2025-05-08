import React, { useState } from "react";
import Button from "./Button";

const Sidebar = ({
  onStartAddProject,
  data,
  onSelectedProject,
  selectedProjectId,
}) => {
  return (
    <>
      <nav className=" bg-black w-60 flex flex-col h-screen">
        <h3 className=" font-bold mt-9 ml-5 text-blue-100">YOUR PROJECTS</h3>
        <ul className="mt-5 ">
          {data.map((item) => {
            let cssClasses =
              "w-full text-left px-2 py-1  rounded-sm my-1 text-white hover:text-blue-300 hover:underline underline-offset-8";

            if (item.id === selectedProjectId) {
              cssClasses +=
                "  text-blue-300 underline underline-offset-8 font-bold";
            } else {
              cssClasses += " text-stone-400";
            }
            return (
              <li key={item.id}>
                <button
                  className={cssClasses}
                  onClick={() => onSelectedProject(item.id)}
                >
                  <p className="text-center font-bold">{item.title}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
