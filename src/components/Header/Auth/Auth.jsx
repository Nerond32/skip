import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import auth0 from "auth0-js";
import { Route, withRouter } from "react-router-dom";
import AuthButton from "./AuthButton/AuthButton";
import { userLogin, userLogout } from "../../../redux/actions";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/prop-types
    this.history = props.history;
    this.auth0 = new auth0.WebAuth({
      clientID: process.env.AUTH0_CLIENT_ID,
      domain: process.env.AUTH0_DOMAIN,
      redirectUrl: process.env.AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email"
    });
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  setSession(authResult) {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    this.props.userLogin(authResult.accessToken, authResult.idToken, expiresAt);
  }

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.history.push("/");
      } else if (err) {
        this.history.push("/");
      }
    });
  };

  login = () => {
    this.auth0.authorize();
  };

  logout = () => {
    this.props.userLogout();
    this.auth0.logout({
      clientID: process.env.AUTH0_CLIENT_ID,
      returnTo: "http:/localhost:5000/"
    });
  };

  authCallback = () => {
    if (/access_token|id_token|error/.test(location.hash)) {
      this.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL");
    }
    return null;
  };

  render() {
    return (
      <React.Fragment>
        <AuthButton loginFun={this.login} logoutFun={this.logout} />
        <Route path="/callback" render={this.authCallback} />
      </React.Fragment>
    );
  }
}

Auth.propTypes = {
  userLogin: PropTypes.func.isRequired,
  userLogout: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  userLogin,
  userLogout
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Auth)
);
