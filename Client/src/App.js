import React from "react";
import Timer from "./Timer";
// import TasksPanel from "./TasksPanel";
// import HabitsPanel from "./HabitsPanel";
// import Input from "./Input"
import { getTasks } from "./ApiService";
import { useEffect, useState } from "react";
import './css/app.scss';
import { ListPanel } from "./ListPanel/ListPanel";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(res => setTasks(res));
  }, []);

  function handleAddItem(item) {
    if (item.type === 'task') {
      const newTask = {

      }
      setTasks(tasks => [...tasks, newTask])
    }
  }

  function toggleHabit(id) {
    const newHabits = [...habits];
    /*Find the id*/
    const habit = newHabits.find((habit) => habit.id === id);
    /*toggle that habit to it's opposite*/
    habit.complete = !habit.complete;
    setHabits(newHabits);
  }

  function handleDeleteSelectedHabits() {
    const newHabits = habits.filter((habit) => !habit.complete);
    setHabits(newHabits);
  }

  function handleClearHabits() {
    const newHabits = habits.map((habit) => {
      habit.complete = false;
      return habit;
    });
    setHabits(newHabits);
  }

  return (
    <div className="flex-body-wrapper">

      <div className="lists-container">

        <div className="scroll-section">
          <ListPanel data={tasks} type="tasks" className="tasks" />
        </div>

        <div className="scroll-section">
          <ListPanel data={tasks} type="tasks" className="tasks" />
        </div>
      </div>

      <div className="timer-container">
        <Timer />
      </div>
    </div>
  );
}

export default App;
