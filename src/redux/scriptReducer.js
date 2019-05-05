import { UPDATE_SCRIPT } from "./actions";

const initialState = "";
function scriptReducer(state = initialState, action) {
  if (action.type === UPDATE_SCRIPT) {
    return action.payload.script;
  }
  return state;
}

export default scriptReducer;
