import React, { useState } from "react";
import Tag from "./tag";
import { XCircleIcon } from "@heroicons/react/outline";

export default function Todo({ todo: { title, tags, id }, onDelete }) {
  const [showDelete, setShowDelete] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const dragStart = (ev) => {
    ev.dataTransfer.setData("id", id.toString());

    setIsDragging(true);
  };

  const dragEnd = (ev) => {
    ev.preventDefault();

    setIsDragging(false);
  };

  const handleMouseEnter = () => {
    setShowDelete(true);
  };
  const handleMouseLeave = () => {
    setShowDelete(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      draggable
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      className={`todo mb-3 relative rounded-md shadow-sm hover:shadow-md bg-white p-3 cursor-move border-t-2 ${
        isDragging && "opacity-30"
      }`}
    >
      {showDelete && (
        <XCircleIcon
          width="25"
          color="red"
          height="25"
          className="absolute right-3 top-2 cursor-pointer"
          onClick={onDelete}
        />
      )}
      <p className="text-md">{title}</p>

      <div className="flex-1 mt-3 space-y-1">
        {tags.map((t) => (
          <Tag color={t.color} title={t.title} key={t.id} />
        ))}
      </div>
    </div>
  );
}
