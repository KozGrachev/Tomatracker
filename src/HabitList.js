import React from 'react'
import Habit from './Habit'



export default function HabitList({ todos, toggleTodo }) {
  return (
    todos.map(todo => {
      return <Habit key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}