import React from "react";
import Timer from "./Timer";
import "./App.css";
import TaskHandler from "./TaskHandler";

function App() {


  return (
    <>
      <div className="App">
        <Timer />
      </div>

      <TaskHandler />
    </>
  );
}

export default App;
