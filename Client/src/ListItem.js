import React, { useState, useEffect } from 'react'

export default function ListItem(props) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    console.log(props.itemData);
  }, []);

  function handleSelected(event) {
    setSelected(!selected);
    // props.addToSelected(props.itemData._id);
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
