import React from "react";
import PropTypes from "prop-types";
import "./Input.less";

const Input = ({ id, name, isChecked, changedInputSelection }) => {
  return (
    <div className="input">
      <div className="inputLabel">{name}:</div>
      <input
        className="inputCheckbox"
        name={name}
        type="checkbox"
        id="yes"
        value="Yes"
        defaultChecked={isChecked}
        onChange={() => changedInputSelection(id)}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  changedInputSelection: PropTypes.func.isRequired
};

export default Input;
