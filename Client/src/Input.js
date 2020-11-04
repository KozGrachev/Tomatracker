import React, { useState } from "react";

const Input = (props) => {
    const [userInput, setUserInput] = useState("");
    // let userInput = 0;

    function handleChange(event) {
        // userInput = event.target.value;
        setUserInput(event.target.value)
    }
    return (

        <div id="time-input">
            {/* <div className="timerPosition svgDimensions">
                <svg height="100%" width="100%">
                    <circle cx="50%" cy="50%" r="49%" stroke="black" stroke-width="3" fill="red" />
                </svg>
            </div> */}
            <input id="min"

                onChange={handleChange}
                placeholder="minutes"
                type="number"
                name="minutes"
            />
            {/* <button className="square-rounded-corners"
                onClick={() => {
                    props.setMinutes(userInput);

                    // setUserInput();
                }}
            >&#9094;</button> */}
        </div>
    )

}

export default Input;