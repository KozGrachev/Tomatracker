import React, { useState, useEffect } from "react";
import "./App.css";

function Timer(props) {
  const [seconds, setSeconds] = useState(0); // The value (state) does not actually actually change. The function is rerendered with a whole new variable that just happens to have the same name.
  const [isRunning, setIsRunning] = useState(false); // HOOKS: .....

  useEffect(() => {
    if (isRunning) {
      const id = window.setTimeout(() => {             // Allows us to call set the next value of seconds only once during this render
        setSeconds(seconds => seconds + 1)
      } // Passing a callback to setSeconds stops the change in seconds triggering the next render.
        // It allows react to know what the value of seconds will be before actually assigning it.
        , 1000                              // It should assign only after the interval has elapsed and not when this part of the code is rendered.
      );
      return () => window.clearTimeout(id); //cleanup function:....
    }
  }, [seconds, isRunning]); // Dependency array - rerender this entire function in order to change the value of seconds. But we don't want to do this because
                            // Uses shallow equality - so if the value is the same, it will not rerender, even if the object is different.

  return (
    <div id="timerContainer">
      <div id="timeDisplay">
        seconds: {seconds}
      </div>

      <div id="buttons">
        { isRunning ?
          <button id="pauseButton" onClick={() => setIsRunning(!isRunning)}>Pause</button> :
          <button id="playButton" onClick={() => setIsRunning(!isRunning)}>Play</button> // Good buttons only flip a boolean. They don't contain any complex logic
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
  )
}
export default Timer;
