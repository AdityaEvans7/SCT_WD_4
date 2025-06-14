import React, { useState } from "react";
import { motion } from "framer-motion";

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const toggleComplete = () => onUpdate({ ...task, completed: !task.completed });

  const handleEdit = () => {
    onUpdate({ ...task, title: newTitle });
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-4 rounded shadow flex justify-between items-center"
    >
      <div className="flex items-center gap-4 w-full">
        <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
        {isEditing ? (
          <input
            className="flex-1 border p-1 rounded"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        ) : (
          <div className={`flex-1 ${task.completed ? "line-through text-gray-400" : ""}`}>
            <div>{task.title}</div>
            {task.datetime && <div className="text-xs text-gray-500">{task.datetime}</div>}
          </div>
        )}
      </div>
      <div className="ml-2 flex gap-2">
        {isEditing ? (
          <button onClick={handleEdit} className="text-green-500">✅</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-500">✏️</button>
        )}
        <button onClick={() => onDelete(task.id)} className="text-red-500">🗑️</button>
      </div>
    </motion.div>
  );
};

export default TaskItem;
