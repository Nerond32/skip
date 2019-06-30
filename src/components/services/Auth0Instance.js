import auth0js from 'auth0-js';

const auth0 = new auth0js.WebAuth({
  clientID: process.env.AUTH0_CLIENT_ID,
  domain: process.env.AUTH0_DOMAIN,
  redirectUrl: process.env.AUTH0_CALLBACK,
  responseType: 'token id_token',
  scope: 'openid profile email'
});

export default auth0;
