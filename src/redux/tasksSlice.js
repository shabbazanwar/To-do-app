import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: "all", // 'all', 'done', or 'notDone'
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        description: action.payload,
        isDone: false,
      };
      state.tasks.push(newTask);
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const { id, newDescription } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) task.description = newDescription;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTaskStatus, editTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
