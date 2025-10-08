import React from "react";
import { toast } from "react-toastify";

const Read = ({ task, setTask }) => {
  // Toggle completion for a specific task
  const toggleComplete = (id) => {
    const updatedTasks = task.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTask(updatedTasks);
  };

  // Delete a specific task
  const deleteHandler = (id) => {
    const filteredTasks = task.filter((t) => t.id !== id);
    setTask(filteredTasks);
    toast.error("Task Deleted");
  };

  return (
    <div className="right">
      <h2>
        <span>Pending</span> Todos
      </h2>
      <ol>
        {task.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed || false}
              onChange={() => toggleComplete(t.id)}
            />
            <p
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                display: "inline", // so text stays next to checkbox
                marginLeft: "8px",
              }}
            >
              {t.work}
            </p>
            <small
              style={{ marginLeft: "12px", cursor: "pointer", color: "white" }}
              onClick={() => deleteHandler(t.id)}
            >
              delete
            </small>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Read;
