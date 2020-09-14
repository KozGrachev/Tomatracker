import React, { useState, useEffect } from "react";
import "./App.css";

function Timer(props) {
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {

  }, [seconds, ]);

  return (
    <div id="timerContainer">
      <div id="timeDisplay">
        seconds: {seconds}
        <br/>
        count: {count}
      </div>

      <div id="buttons">
        <button id="startButton">Start</button>
        <button id="pauseButton">Pause</button>
        <button id="resetButton">Reset</button>
      </div>

      <button onClick={() => setSeconds(seconds + 1)}>inc seconds</button>
      <button onClick={() => setCount(count + 1)}>inc count</button>
    </div>
  )
}
export default Timer;
