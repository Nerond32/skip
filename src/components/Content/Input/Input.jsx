import React from "react";
import "./Input.less";

const Input = props => {
  return (
    <div className="input">
      {props.name}:
      <input
        name={props.name}
        type="checkbox"
        id="yes"
        value="Yes"
        defaultChecked={props.isChecked}
        onChange={e => props.changedInputSelection(props.id)}
      />
    </div>
  );
};

export default Input;
