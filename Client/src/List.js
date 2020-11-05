import React, { useState } from "react";
import Task from "./ListItem";


function List(props) {

  function renderList() {
    return (
      props.data.map(item => {
        return <Task data={item} key={item._id} />
      })
    )
  }

  return (
    <div className="list" >
      {renderList()}
    </div>
  )
}

export default List;