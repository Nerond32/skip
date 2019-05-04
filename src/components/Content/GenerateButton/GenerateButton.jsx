import React from "react";
import PropTypes from "prop-types";

const GenerateButton = ({ generate }) => {
  return (
    <button type="button" id="generateButton" onClick={generate}>
      Generate script
    </button>
  );
};

GenerateButton.propTypes = {
  generate: PropTypes.func.isRequired
};

export default GenerateButton;
