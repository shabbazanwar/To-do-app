import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return alert("Task description cannot be empty!");
    dispatch(addTask(description));
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
