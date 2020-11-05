import React from 'react'
import Habit from '../Habit'



export default function HabitList({ habits, toggleHabit }) {
  return (
    habits.map(habit => {
      return <Habit key={habit.id} toggleHabit={toggleHabit} habit={habit} />
    })
  )
}