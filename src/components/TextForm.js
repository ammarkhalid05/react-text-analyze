import React from "react";
import { useState } from "react";


export default function TextForm(props) {
    const [text, setText] = useState("");
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
    <div>
      <div className="container mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control mb-3" value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Prewiew</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
