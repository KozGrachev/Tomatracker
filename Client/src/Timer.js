import React, { useState, useEffect } from "react";
import Input from "./Input";
// import './css/buttons.scss'
// import "./css/nm-style.module.scss"


function Timer(props) {
  // const [timeLength, setMinutesLength] = useState(0);
  const [seconds, setSeconds] = useState(200); // The value (state) does not actually actually change. The function is rerendered with a whole new variable that just happens to have the same name.
  const [isRunning, setIsRunning] = useState(false); // HOOKS: .....
  // const [mode, setMode] = useState("work"); // mode values: 'work', 'rest', 'focus', 'input'
  const mode = 'work';

  useEffect(() => {
    if (isRunning) {
      const id = window.setTimeout(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000);
      if (seconds <= 0) {
        setIsRunning(false);
      }
      return () => window.clearTimeout(id); //cleanup function:....
    }

    console.log("Re-rendering...")
  }, [seconds, isRunning]); // Dependency array - rerender this entire function in order to change the value of seconds. But we don't want to do this because
  // Uses shallow equality - so if the value is the same, it will not rerender, even if the object is different.


  const time = (s) => {
    const secs = s % 60 < 10 ? "0" + s % 60 : s % 60;
    const mins = Math.floor(s / 60);
    // const minsString = m < 10 ? "0" + m : m;
    const tenMins = Math.floor(mins / 10);
    const tenSecs = Math.floor(secs / 10);
    return [tenMins, mins % 10, tenSecs, secs % 10];

    // return mins + ":" + secs;
  }

  const timeArr = time(seconds);

  const restTime = time(seconds / 6);
  console.log("Rest time: " + restTime);

  function setMinutes(minutes) {
    setSeconds(minutes * 60);
  }

  function display(mode) {

    return <>
      <div id="timer-container" className={isRunning ? "circle running" : "circle not-running"} >

        <div id="dial-panel" className="timer timerDimensions timerPosition circle" onClick={() => setIsRunning(!isRunning)}>

          <button onClick={() => setMinutes(45)} id="set-hour"></button>
          <button onClick={() => setMinutes(25)} id="set-half-hour"></button>
          <div id="time-display">
            <div className="time-display-cell" id="ten-mins">{timeArr[0]}</div>
            <div className="time-display-cell" id="single-mins">{timeArr[1]}</div>
            <div className="time-display-cell" id="colon">:</div>
            <div className="time-display-cell" id="ten-secs">{timeArr[2]}</div>
            <div className="time-display-cell" id="single-secs">{timeArr[3]}</div>
            {/* {time(seconds)} */}
          </div>
          {/* {!isRunning ? <Input className="timerPosition" setMinutes={setMinutes} /> : ""} */}
          <Input className="timerPosition" setMinutes={setMinutes} />
        </div>
      </div>

    </>
  }

  function selectMode() {

    return (
      mode === 'work' && isRunning === true ? display('work') :
        mode === 'rest' && isRunning === true ? display('rest') :
          mode === 'focus' && isRunning === true ? display('focus') :
            mode === 'input' || isRunning === false ? display('input') :
              "INVALID MODE"
    )
  }


  return (
    selectMode()
  )
}

export default Timer;
