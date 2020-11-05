import React, { useState, useEffect } from "react";
import List from '../List/List';

export function ListPanel(props) {
  const [title, setTitle] = useState('');
  // const [itemType, setItemType] = useState();


  function handleAddItem() {
    console.log(props.type)
    if (title) {
      const newItem = {
        title: title,
        note: 'Add details...',
        itemType: props.type,
        dateCreated: Date.now()
      }
      props.handleAddItem(newItem);
      setTitle('')
    }
  }

  const handleChange = (e) => setTitle(e.target.value);

  return (
    <div className="list-panel">
      <h1>{props.type}</h1>
      <List className="list" data={props.data} />
      <div className="controls">
        <input className="input-textbox-lists" value={title} onChange={handleChange} type="text" />
        <button className="rounded-square" onClick={handleAddItem}>+</button>
        <button className="rounded-square" onClick={() => console.log("Clicked undo button")}>&#8634;</button>
        <button className="rounded-square" onClick={() => console.log("Clicked remove button")}>-</button>
      </div>
    </div>
  );
}
