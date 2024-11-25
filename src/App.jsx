import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>TO DO APPLICATION</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
