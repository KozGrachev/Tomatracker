import React, {useState} from "react";

const Input = (props) => {
    const [userInput, setUserInput] = useState(""); 

    function handleChange(event) {
        setUserInput(event.target.value)
    }
    console.log('userInput: ',userInput)
    return (
        <div>
            <input 
                onChange={handleChange}
                placeholder="minutes"
                type="number"
                name="minutes"
            />
            <button
                onClick={() => {
                    props.setWorkTime(userInput);
                    setUserInput("");
                }}
            >Submit</button>
        </div>
    )

}

export default Input;