import React from "react";
import Timer from "./Timer";
import TaskHandler from "./TaskHandler";
import HabitHandler from "./HabitHandler";
import './css/app.scss';

function App() {
  return (
    <div className="flex-body-wrapper">
      <div className="flex-container-lists">
        <div className="habit-container">
          <HabitHandler />
        </div>
        <div className="task-container">
          <TaskHandler />
        </div>
      </div>

      <div className="flex-container-timer">
        <Timer />
      </div>
    </div>
  );
}

export default App;
