import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [datetime, setDatetime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAdd({
      id: Date.now(),
      title,
      datetime,
      completed: false
    });
    setTitle("");
    setDatetime("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
      <input
        type="text"
        className="flex-1 p-2 rounded border"
        placeholder="Add new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="datetime-local"
        className="p-2 rounded border"
        value={datetime}
        onChange={(e) => setDatetime(e.target.value)}
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
