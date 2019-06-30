import { CHANGE_DARK_MODE } from '../actions';

const initialState = {
  darkMode: true
};
function appReducer(state = initialState, action) {
  if (action.type === CHANGE_DARK_MODE) {
    return { ...state, darkMode: !state.darkMode };
  }
  return state;
}

export default appReducer;
