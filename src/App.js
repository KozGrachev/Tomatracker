import React from "react";
import Timer from "./Timer";
import "./css/app.css";
import TaskHandler from "./TaskHandler";

function App() {
  return (
    <div className="flex-body-wrapper">
      <div className="flex-container">
        <TaskHandler />
      </div>

      <div className="App flex-container">
        <Timer />
      </div>
    </div>
  );
}

export default App;
