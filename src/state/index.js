import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import sessionReducer from "./session/reducer";

export default combineReducers({
  routing: routerReducer,
  session: sessionReducer
});
