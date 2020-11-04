import React, { useState } from "react";
import Task from "../Task";


function List(props) {

  function renderList() {
    return (
      props.tasks.map(task => {
        console.log(task.content);
        return <Task data={task} key={task._id} />
      })
    )
  }

  function renderControls() {

  }

  return (
    <div className="list" >
      {renderList()}
    </div>
  )
}

export default List;