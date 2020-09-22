import React, { useState, useEffect } from "react";
import Input from "./Input";
// import "./css/nm-style.module.scss"


function Timer(props) {
  const [timeLength, setTimeLength] = useState(0);
  const [seconds, setSeconds] = useState(200); // The value (state) does not actually actually change. The function is rerendered with a whole new variable that just happens to have the same name.
  const [isRunning, setIsRunning] = useState(false); // HOOKS: .....
  const [mode, setMode] = useState("work"); // mode values: 'work', 'rest', 'focus', 'input'


  useEffect(() => {
    if (isRunning ) {
      const id = window.setTimeout(() => {
        setSeconds(seconds => seconds - 1)}, 1000);
      if (seconds <= 0) {
        setIsRunning(false);
      }
      return () => window.clearTimeout(id); //cleanup function:....
    }

    console.log("Re-rendering...")
  }, [seconds, isRunning]); // Dependency array - rerender this entire function in order to change the value of seconds. But we don't want to do this because
  // Uses shallow equality - so if the value is the same, it will not rerender, even if the object is different.

  // const minutes = seconds * 60;
  const time = (s) => {
    const secs = s%60 < 10 ? "0" + s%60 : s%60;
    const m = Math.floor(s/60);
    const mins = m < 10 ? "0" + m : m;
    return mins + ":" + secs;
  }

  const restTime = time(seconds/6);
  console.log("Rest time: " + restTime);

  function display (mode) {

    return <div id="dial-container">

      <a id="dial-panel" className="timer timerDimensions timerPosition circle" onClick={() => setIsRunning(!isRunning)}>
        <div id="timeDisplay">
          {time(seconds)}
        </div>
      </a>
      {!isRunning ? <Input className="timerPosition" setTime={setTime} /> : ""}
      {/* <div id="set-half-hour"></div> */}
    </div>
  }

  function selectMode () {

    return (
      mode === 'work' && isRunning === true ? display('work') :
      mode === 'rest' && isRunning === true  ? display('rest') :
      mode === 'focus' && isRunning === true  ? display('focus') :
      mode === 'input' || isRunning === false  ? display('input') :
      "INVALID MODE"
    )
  }
  function setTime (time) {
    setSeconds(time);
  }

  return (
      selectMode()
  )
}

export default Timer;
