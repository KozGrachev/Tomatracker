



/*useState is needed to save the current list of things that need doing
useRef instead allows us to access the input box
uuid will help provide a unique id to habits*/

import React, { useState, useRef, useEffect } from "react";
import List from '../List/List'
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "tomatrackerApp.habits";

export function ListPanel(Props) {
  const [habits, setHabits] = useState([]); //[{id: 1, name:'habit1', complete: false}]
  const habitNameRef = useRef(); //

  function handleAddhabit() {
    console.log("habitNameRef:", habitNameRef);
    const name = habitNameRef.current.value;
    if (name === "") return;

    setHabits((prevHabits) => {
      //will give us previous habits, and add one
      return [...prevHabits, { id: uuidv4(), name: name, complete: false }];
    });

    habitNameRef.current.value = null; //clears box
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
    <>
      <h1>Tasks</h1>
      <List data={habits} toggleHabit={toggleHabit} />
      <input className="input-textbox-lists" ref={habitNameRef} type="text" />
      <button className="rounded-square" onClick={handleAddhabit}>+</button>
      <button className="rounded-square" onClick={handleClearHabits}>&#8634;</button>
      <button className="rounded-square" onClick={handleDeleteSelectedHabits}>-</button>
    </>
  );
}
