import React, { forwardRef } from "react";

const Input = forwardRef(function AddProjectInputs(
  { labels, textarea, ...props },
  ref
) {
  const classes =
    "w-full p-1 border-b-2 rounded border-blue-200 bg-blue-100 text-black focus:outline-none focus:border-blue-300 h-10 text-sm";
  return (
    <p className="text-xs flex flex-col gap-1 my-4">
      <label htmlFor="" className="text-sm font-bold uppercase text-black">
        {labels}
      </label>
      {textarea ? (
        <textarea {...props} ref={ref} className={classes} />
      ) : (
        <input {...props} ref={ref} className={classes} />
      )}
    </p>
  );
});

export default Input;
