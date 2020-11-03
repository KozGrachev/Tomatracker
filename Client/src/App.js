import React from "react";
import Timer from "./Timer";
import TasksPanel from "./TasksPanel";
import HabitsPanel from "./HabitsPanel";
import './css/app.scss';

function App() {
  return (
    <div className="flex-body-wrapper">

      <div className="habit-container">
        <HabitsPanel />
      </div>
      
      <div className="task-container">
        <TasksPanel />
      </div>

      <div className="flex-container-timer">
        <Timer />
      </div>
    </div>
  );
}

export default App;
