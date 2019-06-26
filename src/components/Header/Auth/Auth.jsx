import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import auth0 from 'auth0-js';
import { Route } from 'react-router-dom';
import Button from '../../Assets/Button';
import { userLogin, userLogout } from '../../../redux/actions';
import { getIsAuthenticated } from '../../../redux/selectors';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/prop-types
    this.history = props.history;
    this.auth0 = new auth0.WebAuth({
      clientID: process.env.AUTH0_CLIENT_ID,
      domain: process.env.AUTH0_DOMAIN,
      redirectUrl: process.env.AUTH0_CALLBACK,
      responseType: 'token id_token',
      scope: 'openid profile email'
    });
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  setSession(authResult) {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    this.props.userLogin(authResult.accessToken, authResult.idToken, expiresAt);
  }

  // handleAuthentication = () => {
  //   this.auth0.parseHash((err, authResult) => {
  //     if (authResult && authResult.accessToken && authResult.idToken) {
  //       this.setSession(authResult);
  //       this.props.history.push('/');
  //     } else if (err) {
  //       console.log(err);
  //       this.props.history.push('/');
  //     }
  //   });
  // };

  handleAuthentication = () => {
    const hash = window.location.hash.substr(1);
    const { state } = hash.split('&').reduce(function(result, item) {
      const parts = item.split('=');
      result[parts[0]] = parts[1];
      return result;
    }, {});
    this.auth0.parseHash({ state, nonce: '1234' }, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.props.history.push('/');
      } else if (err) {
        this.props.history.push('/');
      }
    });
  };

  login = () => {
    this.auth0.authorize({
      nonce: '1234'
    });
  };

  logout = () => {
    this.props.userLogout();
    this.auth0.logout({
      clientID: process.env.AUTH0_CLIENT_ID,
      returnTo: 'http://localhost:5000/'
    });
  };

  authCallback = () => {
    this.handleAuthentication();
  };

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.props.isAuthenticated ? this.login : this.logout}>
          {this.props.isAuthenticated ? 'Logout' : 'Login'}
        </Button>
        <Route path="/callback" render={this.authCallback} />
      </React.Fragment>
    );
  }
}

Auth.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  userLogin: PropTypes.func.isRequired,
  userLogout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: getIsAuthenticated(state)
  };
}

const mapDispatchToProps = {
  userLogin,
  userLogout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
