import React, { useState } from 'react'

export default function Task(props) {
  const [selected, setSelected] = useState(false);

  function handleSelected(event) {

  }

  return (
    <div className={`task ${props.data.completed ? "completed" : "notCompleted"}`}>
      <div className={`radio ${selected ? "selected" : ""}`} onClick={handleSelected}></div>
      <div className="content" >
        <p className="title">{props.data.title}</p>
        <p className="note">{props.data.note}</p>
      </div>

    </div>
  )
}
