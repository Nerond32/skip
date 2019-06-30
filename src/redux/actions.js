import auth0 from '../components/services/Auth0Instance';

export const UPDATE_SCRIPT = 'UPDATE_SCRIPT';
export const CHANGE_DARK_MODE = 'CHANGE_DARK_MODE';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const updateScript = script => ({
  type: UPDATE_SCRIPT,
  payload: { script }
});
export const changeDarkMode = () => ({
  type: CHANGE_DARK_MODE
});
export const loginUser = ({ accessToken, idToken, expiresAt }) => ({
  type: USER_LOGIN,
  payload: { accessToken, idToken, expiresAt }
});
export const logoutUser = () => ({
  type: USER_LOGOUT
});

export const logout = () => {
  auth0.logout({
    clientID: process.env.AUTH0_CLIENT_ID,
    returnTo: 'http://localhost:5000/'
  });
  return dispatch => {
    dispatch(logoutUser());
  };
};

export const login = history => {
  const hash = window.location.hash.substr(1);
  const { state } = hash.split('&').reduce((result, item) => {
    const parts = item.split('=');
    const [key, value] = parts;
    return { ...result, [key]: value };
  }, {});
  return dispatch => {
    auth0.parseHash({ state, nonce: '1234' }, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        const expiresAt = JSON.stringify(
          authResult.expiresIn * 1000 + new Date().getTime()
        );
        dispatch(
          loginUser({
            accessToken: authResult.accessToken,
            idToken: authResult.idToken,
            expiresAt
          })
        );
        history.push('/');
      }
    });
  };
};
