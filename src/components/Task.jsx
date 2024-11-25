import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTaskStatus, editTask } from "../redux/tasksSlice";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, newDescription }));
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.isDone ? "done" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <p>{task.description}</p>
          <button onClick={() => dispatch(toggleTaskStatus(task.id))}>
            {task.isDone ? "Undo" : "Done"}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Task;
