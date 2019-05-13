import { USER_LOGIN, USER_LOGOUT } from "../actions";

const initialState = {
  accessToken: true,
  authResult: "",
  expiresAt: 0
};
function userReducer(state = initialState, action) {
  if (action.type === USER_LOGIN) {
    return {
      ...state,
      access_token: action.accessToken,
      authResult: action.authResult,
      expiresAt: action.expiresAt
    };
  }
  if (action.type === USER_LOGOUT) {
    return {
      ...state,
      access_token: initialState.accessToken,
      authResult: initialState.authResult,
      expiresAt: initialState.expiresAt
    };
  }
  return state;
}

export default userReducer;
