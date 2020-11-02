import React from 'react'
import Task from './Task'



export default function TaskList({ todos, toggleTodo }) {
  return (
    todos.map(todo => {
      return <Task key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}
