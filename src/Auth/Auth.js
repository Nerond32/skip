import auth0 from "auth0-js";

export default class Auth {
  constructor(history) {
    this.history = history;
    this.auth0 = new auth0.WebAuth({
      clientID: process.env.AUTH0_CLIENT_ID,
      domain: process.env.AUTH0_DOMAIN,
      redirectUrl: process.env.AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email"
    });
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      console.log(authResult);
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.history.push("/");
      } else if (err) {
        this.history.push("/");
        alert(`Error: ${err.error}`);
        console.log(err);
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  setSession(authResult) {
    console.log(authResult);
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
  }

  login() {
    this.auth0.authorize();
  }

  // eslint-disable-next-line class-methods-use-this
  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.auth0.logout({
      clientID: process.env.AUTH0_CLIENT_ID,
      returnTo: "http:/localhost:5000/"
    });
  }

  // eslint-disable-next-line class-methods-use-this
  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }
}
