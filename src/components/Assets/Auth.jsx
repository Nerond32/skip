import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from './Button';
import * as actions from '../../redux/actions';
import { getIsAuthenticated } from '../../redux/selectors';
import auth0 from '../services/Auth0Instance';

const Auth = ({ history, isAuthenticated, logout }) => {
  const loginFunction = () => {
    auth0.authorize({
      nonce: '1234'
    });
  };
  const logoutFunction = () => {
    logout();
    history.push('/');
  };
  return (
    <Button onClick={isAuthenticated ? logoutFunction : loginFunction}>
      {isAuthenticated ? 'Logout' : 'Login'}
    </Button>
  );
};

Auth.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: getIsAuthenticated(state)
  };
}

const mapDispatchToProps = {
  logout: actions.logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
