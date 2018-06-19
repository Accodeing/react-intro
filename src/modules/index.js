import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import sessionReducer from "./session/reducer";
import todoReducer from "./todo/reducer";
import userReducer from "./user/reducer";

export default combineReducers({
  routing: routerReducer,
  session: sessionReducer,
  todo: todoReducer,
  user: userReducer
});
