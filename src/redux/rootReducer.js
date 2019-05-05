import { combineReducers } from "redux";
import darkModeReducer from "./darkmodeReducer";
import scriptReducer from "./scriptReducer";

export default combineReducers({
  darkMode: darkModeReducer,
  script: scriptReducer
});
