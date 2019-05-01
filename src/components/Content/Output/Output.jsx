import React from "react";
import "./Output.css";

const Output = () => {
  return (
    <textarea
      id="output"
      rows="4"
      cols="50"
      value="Test text area"
      readOnly={true}
    />
  );
};

export default Output;
