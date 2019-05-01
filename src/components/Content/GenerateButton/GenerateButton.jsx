import React from "react";
import PropTypes from "prop-types";
import "./GenerateButton.css";

const GenerateButton = props => {
  return (
    <button id="generateButton" onClick={props.generate}>
      Generate script
    </button>
  );
};

GenerateButton.propTypes = {
  generate: PropTypes.func
};

export default GenerateButton;
