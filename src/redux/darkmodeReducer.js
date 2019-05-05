import { CHANGE_DARK_MODE } from "./actions";

const initialState = true;
function darkModeReducer(state = initialState, action) {
  if (action.type === CHANGE_DARK_MODE) {
    return !state;
  }
  return state;
}

export default darkModeReducer;
