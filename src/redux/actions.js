export const UPDATE_SCRIPT = "UPDATE_SCRIPT";
export const CHANGE_DARK_MODE = "CHANGE_DARK_MODE";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const updateScript = script => ({
  type: UPDATE_SCRIPT,
  payload: { script }
});
export const changeDarkMode = () => ({
  type: CHANGE_DARK_MODE
});
export const userLogin = (accessToken, authResult, expiresAt) => ({
  type: USER_LOGIN,
  payload: { accessToken, authResult, expiresAt }
});
export const userLogout = () => ({
  type: USER_LOGOUT
});
