import { USER_LOGIN, USER_LOGOUT } from '../actions';

const initialState = {
  accessToken: '',
  idToken: '',
  expiresAt: 0
};
function userReducer(state = initialState, action) {
  if (action.type === USER_LOGIN) {
    return {
      ...state,
      accessToken: action.payload.accessToken,
      idToken: action.payload.idToken,
      expiresAt: action.payload.expiresAt
    };
  }
  if (action.type === USER_LOGOUT) {
    return {
      ...state,
      accessToken: initialState.accessToken,
      idToken: initialState.idToken,
      expiresAt: initialState.expiresAt
    };
  }
  return state;
}

export default userReducer;
