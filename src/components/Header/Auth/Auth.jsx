import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import auth0 from "auth0-js";
import AuthButton from "./AuthButton/AuthButton";
import { userLogin, userLogout } from "../../../redux/actions";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    // this.history = props.history;
    this.auth0 = new auth0.WebAuth({
      clientID: process.env.AUTH0_CLIENT_ID,
      domain: process.env.AUTH0_DOMAIN,
      redirectUrl: process.env.AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email"
    });
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  setSession(authResult) {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    this.props.userLogin(authResult.accessToken, authResult.idToken, expiresAt);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        // this.history.push("/");
      } else if (err) {
        // this.history.push("/");
      }
    });
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    this.props.userLogout();
    this.auth0.logout({
      clientID: process.env.AUTH0_CLIENT_ID,
      returnTo: "http:/localhost:5000/"
    });
  }

  // isAuthenticated() {
  //   const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
  //   return new Date().getTime() < expiresAt;
  // }

  render() {
    return <AuthButton loginFun={this.login} logoutFun={this.logout} />;
  }
}

Auth.propTypes = {
  userLogin: PropTypes.func.isRequired,
  userLogout: PropTypes.func.isRequired
};

// function mapStateToProps(state) {
//   return { script: state.script };
// }

const mapDispatchToProps = {
  userLogin,
  userLogout
};

export default connect(
  null,
  mapDispatchToProps
)(Auth);
