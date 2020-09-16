import React, { useState, useEffect } from "react";
//import "./App.css";

function Timer(props) {
  const [timeLength, setTimeLength] = useState(0);
  const [seconds, setSeconds] = useState(200); // The value (state) does not actually actually change. The function is rerendered with a whole new variable that just happens to have the same name.
  const [isRunning, setIsRunning] = useState(false); // HOOKS: .....
  const [mode, setMode] = useState("work"); // mode values: 'work', 'rest', 'focus', 'input'


  useEffect(() => {
    if (isRunning ) {
      const id = window.setTimeout(() => {   // Allows us to call set the next value of seconds only once during this render
        setSeconds(seconds => seconds - 1)
      } // Passing a callback to setSeconds stops the change in seconds triggering the next render.
        // It allows react to know what the value of seconds will be before actually assigning it.
      , 1000   // It should assign only after the interval has elapsed and not when this part of the code is rendered.
      );
      if (seconds <= 0) {
        setIsRunning(false);
      }
      return () => window.clearTimeout(id); //cleanup function:....
    }
    // else {
    //   setMode("input");
    // }

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

  function displayWorkMode () {

    return <div className="timerContainer circle">
      <div id="timeDisplay">
        {time(seconds)}
      </div>
      <div id="buttons">
        { isRunning ?
          <button id="pauseButton" onClick={() => setIsRunning(!isRunning)}>Pause</button> :
          <button id="playButton" onClick={() => setIsRunning(!isRunning)}>Start</button> // Good buttons only flip a boolean. They don't contain any complex logic
        }
        <button
          id="resetButton"
          disabled={seconds === 0 && !isRunning}
          onClick={() =>{
          setSeconds(0);
          setIsRunning(false);
          }}>Reset</button>
      </div>
    </div>
  }

  function displayRestMode () {
    return <div>REST MODE</div>
  }

  function displayFocusMode () { return <div>FOCUS MODE</div>}
  function displayInputMode () { return <div>INPUT MODE</div>}

  function selectMode () {

  }

  return (
    mode === 'work' || isRunning === true ? displayWorkMode() :
    mode === 'rest' || isRunning === true  ? displayRestMode() :
    mode === 'focus' || isRunning === true  ? displayFocusMode() :
    mode === 'focus' || isRunning === true  ? displayInputMode() :
    "INVALID MODE"
  )
}

export default Timer;
