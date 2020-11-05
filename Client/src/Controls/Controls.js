import React from 'react';

export default function Controls(props) {

  function handleAddItem() {
    console.log('ADD TASK BUTTON PRESSED');
  }
  function handleDeleteSelectedItems() {
    console.log('DELETE TASK BUTTON PRESSED');
  }


  return (
    <>
      <input className="input-textbox-lists" ref={habitNameRef} type="text" />
      <button className="rounded-square" onClick={handleAddItem}>+</button>
      <button className="rounded-square" onClick={handleDeleteSelectedItems}>-</button>
    </>
  )
}