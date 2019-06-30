import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from './Button';
import { logout } from '../../redux/actions';
import { getIsAuthenticated } from '../../redux/selectors';
import auth0 from '../services/Auth0Instance';

class Auth extends React.Component {
  login = () => {
    auth0.authorize({
      nonce: '1234'
    });
  };

  logout = () => {
    this.props.logout();
    this.props.history.push('/');
  };

  render() {
    return (
      <Button onClick={this.props.isAuthenticated ? this.logout : this.login}>
        {this.props.isAuthenticated ? 'Logout' : 'Login'}
      </Button>
    );
  }
}

Auth.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: getIsAuthenticated(state),
    expiresAt: state.userData.expiresAt
  };
}

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
