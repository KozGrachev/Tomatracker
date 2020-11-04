import React from "react";
import Timer from "./Timer";
import TasksPanel from "./TasksPanel";
import HabitsPanel from "./HabitsPanel";
import { fetchRequest } from "./ApiService";
import { useEffect, useState } from "react";
import './css/app.scss';
import List from "./List/List";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchRequest('/tasks')
      .then(res => setTasks(res));
  }, []);

  return (
    <div className="flex-body-wrapper">

      <div className="lists-container">

        <div className="">
          <List className="tasks" tasks={tasks} />
        </div>

        <div className="scroll-section">
          <List className="habits" tasks={tasks} />
        </div>
      </div>

      <div className="timer-container">
        <Timer />
      </div>
    </div>
  );
}

export default App;
