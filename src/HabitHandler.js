/*useState is needed to save the current list of things that need doing
useRef instead allows us to access the input box
uuid will help provide a unique id to habits*/

import React, { useState, useRef, useEffect } from "react";
import HabitList from "./HabitList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "tomatrackerApp.habits";

export default function HabitHandler() {
  const [habits, setHabits] = useState([]); //[{id: 1, name:'habit1', complete: false}]
  const habitNameRef = useRef(); //

  /*
  This checks if something's stored and if it is, it loads it
  Note: JSON.parse converts string to an array
  */
  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedHabits) setHabits(storedHabits);
  }, []);
  /*
  Anytime anything in the array changes, it will call useeffect function.
  Note:JSON.stringify changes array into a string for local storage
  */
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(habits));
  }, [habits]);

  function handleAddhabit(e) {
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
      <HabitList habits={habits} toggleHabit={toggleHabit} />
      <input className="input-textbox-lists" ref={habitNameRef} type="text" />
      <button className="button" onClick={handleAddhabit}>Add Habit</button>
      <button className="button" onClick={handleClearHabits}>Reset Habits</button>
      <button className="button" onClick={handleDeleteSelectedHabits}>Delete Habits</button>
    </>
  );
}
