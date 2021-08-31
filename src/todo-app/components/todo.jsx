import React, { useState } from "react";
import Tag from "./tag";

import randomColor from "../shared";

export function Todo({ todo: { title, tags, id } }) {
  const [isDragging, setIsDragging] = useState(false);

  const dragStart = (ev) => {
    ev.dataTransfer.setData("id", id.toString());

    setIsDragging(true);
  };

  const dragEnd = (ev) => {
    ev.preventDefault();

    setIsDragging(false);
  };

  return (
    <div
      draggable
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      className={`todo mb-3 rounded-md shadow-sm hover:shadow-md bg-white p-3 cursor-move border-t-2 ${
        isDragging && "opacity-30"
      }`}
    >
      <p className="text-md">{title}</p>

      <div className="flex-1 mt-3 space-y-1">
        {tags.map((t) => (
          <Tag color={randomColor()} title={t.title} key={t.id} />
        ))}
      </div>
    </div>
  );
}
