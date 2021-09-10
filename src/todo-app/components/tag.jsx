import React from "react";
import { XIcon } from "@heroicons/react/outline";

export default function Tag({ title, color, children, onDelete }) {
  return (
    <div
      className={`mr-2 bg-${color}-300 rounded-md inline-block px-2 py-1/2 `}
    >
      <p className="text-sm inline">{title}</p>
      {typeof onDelete == "function" && (
        <XIcon className="h-3 w-3 inline" onClick={onDelete} />
      )}
      {children && children}
    </div>
  );
}
