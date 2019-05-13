import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getIsAuthenticated } from "../../../../redux/selectors";

const AuthButton = ({ isAuthenticated, loginFun, logoutFun }) => {
  return (
    <button
      className="authButton"
      type="button"
      onClick={isAuthenticated ? logoutFun : loginFun}
    >
      {isAuthenticated ? "Logout" : "Login"}
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

function mapStateToProps(state) {
  return {
    isAuthenticated: getIsAuthenticated(state)
  };
}

export default connect(mapStateToProps)(AuthButton);
