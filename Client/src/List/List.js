import React, { useState } from "react";
import Task from "../Task";


function List(props) {

  function renderList() {
    return (
      props.data.map(item => {
        console.log(item.content);
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