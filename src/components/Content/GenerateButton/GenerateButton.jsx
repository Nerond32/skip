import React from "react";
import "./GenerateButton.css";

const GenerateButton = props => {
  return (
    <button id="generateButton" onClick={props.generate}>
      Generate script
    </button>
  );
};

export default GenerateButton;
