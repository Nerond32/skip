import React from "react";
import PropTypes from "prop-types";

const DarkModeButton = ({ onClick }) => {
  return <button onClick={onClick} type="button" />;
};

DarkModeButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DarkModeButton;
