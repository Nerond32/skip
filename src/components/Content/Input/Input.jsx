import React from "react";
import data from "./data";
import "./Input.less";

const Input = () => {
  console.log(data);
  return (
    <div>
      {Object.entries(data).map(([key, value]) => (
        <div className="input" key={key}>
          {value.name}: Yes
          <input name={value.name} type="radio" id="yes" value="Yes" />
          No
          <input
            name={value.name}
            type="radio"
            id="no"
            value="No"
            checked={value.isChecked}
          />
        </div>
      ))}
    </div>
  );
};

export default Input;
