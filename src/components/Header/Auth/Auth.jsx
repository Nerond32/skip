import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import auth0 from 'auth0-js';
import { Route } from 'react-router-dom';
import Button from '../../Assets/Button';
import { login, logout } from '../../../redux/actions';
import { getIsAuthenticated } from '../../../redux/selectors';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.auth0 = new auth0.WebAuth({
      clientID: process.env.AUTH0_CLIENT_ID,
      domain: process.env.AUTH0_DOMAIN,
      redirectUrl: process.env.AUTH0_CALLBACK,
      responseType: 'token id_token',
      scope: 'openid profile email'
    });
  }

  login = () => {
    this.auth0.authorize({
      nonce: '1234'
    });
  };

  logout = () => {
    this.props.logout();
    this.props.history.push('/');
  };

  authCallback = () => {
    this.props.login();
    this.props.history.push('/');
  };

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.props.isAuthenticated ? this.logout : this.login}>
          {this.props.isAuthenticated ? 'Logout' : 'Login'}
        </Button>
        <Route path="/callback" render={this.authCallback} />
      </React.Fragment>
    );
  }
}

Auth.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: getIsAuthenticated(state)
  };
}

const mapDispatchToProps = {
  login,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
