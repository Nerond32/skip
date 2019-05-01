import React from "react";
import "./Input.less";

const Input = props => {
  return (
    <div className="input">
      {props.name}: Yes
      <input name={props.name} type="radio" id="yes" value="Yes" />
      No
      <input
        name={props.name}
        type="radio"
        id="no"
        value="No"
        checked={props.isChecked}
      />
    </div>
  );
};

export default Input;
