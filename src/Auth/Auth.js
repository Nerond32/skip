import auth0 from "auth0-js";

export default class Auth {
  constructor(history) {
    this.history = history;
    this.auth0 = new auth0.WebAuth({
      responseType: "token id_token",
      scope: "openid profile email"
    });
  }

  login() {
    this.auth0.authorize();
  }
}
