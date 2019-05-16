import { USER_LOGIN, USER_LOGOUT } from '../actions';

const initialState = {
  accessToken: '',
  authResult: '',
  expiresAt: 0
};
function userReducer(state = initialState, action) {
  if (action.type === USER_LOGIN) {
    return {
      ...state,
      accessToken: action.payload.accessToken,
      authResult: action.payload.authResult,
      expiresAt: action.payload.expiresAt
    };
  }
  if (action.type === USER_LOGOUT) {
    return {
      ...state,
      accessToken: initialState.accessToken,
      authResult: initialState.authResult,
      expiresAt: initialState.expiresAt
    };
  }
  return state;
}

export default userReducer;
