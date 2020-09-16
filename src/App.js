import React from "react";
import Timer from "./Timer";
import "./css/app.css";
import TaskHandler from "./TaskHandler";

function App() {
  return (
    <div className="flex-body-wrapper">
      <div className="flex-container-list">
        <TaskHandler />
      </div>

      <div className="App flex-container-timer">
        <Timer />
      </div>
    </div>
  );
}

export default App;
