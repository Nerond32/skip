import React from 'react';
import PropTypes from 'prop-types';

const AuthButton = ({ isAuthenticated, loginFun, logoutFun }) => {
  return (
    <button
      className="authButton"
      type="button"
      onClick={isAuthenticated ? logoutFun : loginFun}
    >
      {isAuthenticated ? 'Logout' : 'Login'}
    </button>
  );
};

AuthButton.defaultProps = {
  isAuthenticated: false
};

AuthButton.propTypes = {
  isAuthenticated: PropTypes.bool,
  loginFun: PropTypes.func.isRequired,
  logoutFun: PropTypes.func.isRequired
};

export default AuthButton;
