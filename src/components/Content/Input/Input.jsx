import React from "react";
import data from "./data";

const Input = () => {
  console.log(data);
  return (
    <div>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          {value.name}: Yes
          <input name={value.name} type="radio" id="yes" value="Yes" />
          No
          <input name={value.name} type="radio" id="no" value="No" />
        </div>
      ))}
    </div>
  );
};

export default Input;
