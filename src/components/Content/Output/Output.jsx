import React from "react";
import PropTypes from "prop-types";

const Output = props => {
  return (
    <textarea id="output" rows="4" cols="50" value={props.text} readOnly />
  );
};

Output.propTypes = {
  text: PropTypes.string.isRequired
};

export default Output;
