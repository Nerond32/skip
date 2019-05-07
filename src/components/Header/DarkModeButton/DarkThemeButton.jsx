import React from "react";
import PropTypes from "prop-types";

const DarkThemeButton = ({ onClick }) => {
  return <button className="darkThemeButton" onClick={onClick} type="button" />;
};

DarkThemeButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DarkThemeButton;
