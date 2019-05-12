import React from "react";
import PropTypes from "prop-types";

const AuthButton = ({ loginFun, logoutFun }) => {
  return (
    <button className="authButton" type="button" onClick={loginFun}>
      SYF
    </button>
  );
};

AuthButton.propTypes = {
  loginFun: PropTypes.func.isRequired,
  logoutFun: PropTypes.func.isRequired
};

export default AuthButton;
