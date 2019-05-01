import React from "react";
import "./Input.less";

const Input = props => {
  return (
    <div className="input">
      {props.name}: Yes
      <input
        name={props.name}
        type="radio"
        id="yes"
        value="Yes"
        checked={props.isChecked}
        onChange={e => props.changedInputSelection(props.id, true)}
      />
      No
      <input
        name={props.name}
        type="radio"
        id="no"
        value="No"
        checked={!props.isChecked}
        onChange={e => props.changedInputSelection(props.id, false)}
      />
    </div>
  );
};

export default Input;
