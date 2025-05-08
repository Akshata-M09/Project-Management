//fallback content
import React from "react";
import pic from "../assets/symbol.png";
import Button from "./Button";
import { SlPlus } from "react-icons/sl";
const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div>
      <div className="text-center mx-auto mt-28 space-y-2">
        <img src={pic} alt="" className="w-10 h-10 mx-auto" />
        <h2 className="text-base font-bold">No Project Selected</h2>
        <p className="text-sm pb-2">Select a project or start a new one</p>
        <Button onClick={onStartAddProject}>
          <span className="text-sm">
            <SlPlus />
          </span>
          Create new Project
        </Button>
      </div>
    </div>
  );
};

export default NoProjectSelected;
