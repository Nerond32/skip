import React from "react";
import "./Output.less";

const Output = props => {
  return (
    <textarea
      id="output"
      rows="4"
      cols="50"
      value={props.text}
      readOnly={true}
    />
  );
};

export default Output;
