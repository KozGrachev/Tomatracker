import React from 'react';
import Timer from './Timer';
// import TasksPanel from './TasksPanel';
// import HabitsPanel from './HabitsPanel';
// import Input from './Input'
import { useEffect, useState } from 'react';
import './css/app.scss';
import { ListPanel } from './ListPanel';
const api = require('./ApiService');

function App() {
  const [tasks, setTasks] = useState([]);
  const [habits, setHabits] = useState([]);

  useEffect(() => { api.getTasks().then(res => setTasks(res)) }, []);
  useEffect(() => { api.getHabits().then(res => setHabits(res)) }, []);

  function handleAddItem(newItem) {
    api.addItem(newItem).then(() => {
      newItem.itemType === 'tasks' ?
        setTasks(tasks => [...tasks, newItem]) :
        setHabits(habits => [...habits, newItem]);
    })
  }

  // write handleSelect function that is called when an item is selected
  // - marks that item as selected by addin it to the selectedItems array
  function handleSelectItem(event) {
    
  }

  return (
    <div className="flex-body-wrapper">
      <div className="lists-container">
        <div className="scroll-section">
          <ListPanel data={tasks} handleAddItem={handleAddItem} type="tasks" className="tasks" />
        </div>

        <div className="scroll-section">
          <ListPanel data={habits} handleAddItem={handleAddItem} type="habits" className="tasks" />
        </div>
      </div>

      <div className="timer-container">
        <Timer />
      </div>
    </div>
  );
}

export default App;
