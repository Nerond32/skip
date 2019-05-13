import { combineReducers } from "redux";
import appReducer from "./appReducer";
import scriptReducer from "./scriptReducer";
import userReducer from "./userReducer";

export default combineReducers({
  app: appReducer,
  script: scriptReducer,
  userData: userReducer
});
