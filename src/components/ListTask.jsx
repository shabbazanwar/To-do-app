import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/tasksSlice";
import Task from "./Task";

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "notDone") return !task.isDone;
    return true;
  });

  return (
    <div>
      <div className="filters">
        <button onClick={() => dispatch(setFilter("all"))}>All</button>
        <button onClick={() => dispatch(setFilter("done"))}>Done</button>
        <button onClick={() => dispatch(setFilter("notDone"))}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
