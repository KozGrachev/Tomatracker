import React from 'react'

export default function Habit({ habit, toggleHabit }) {
  function handleHabitClick() {
    toggleHabit(habit.id)
  }

  return (
    <div>
      <label>
          <input type='checkbox' checked={habit.complete} onChange={handleHabitClick} />
          {habit.name}
      </label>
    </div>
  )
}