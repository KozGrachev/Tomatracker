import React from 'react'

export default function Task(props) {
  return (
    <div className={`task ${props.data.completed ? "completed" : "notCompleted"}`}>
      <div className="radio"></div>
      <div className="content" >
        <p className="title">{props.data.title}</p>
        <p className="note">{props.data.note}</p>
      </div>

    </div>
  )
}
