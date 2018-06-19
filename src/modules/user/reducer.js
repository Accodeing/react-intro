import * as types from "./action_types.js";
import * as globalTypes from "../action_types.js";
import {
  saveToSessionStorage,
  loadFromSessionStorage,
  removeFromSessionStorage,
  USER
} from "../sessionStorage.js";

const initialState = {
  id: null,
  name: null,
  year: null,
  color: null,
  pantone_value: null,
  loading: false,
  ...loadFromSessionStorage(USER)
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUESTING:
      return {
        ...state,
        loading: true
      };

    case types.SUCCESSFUL:
      saveToSessionStorage(USER, action.user);
      return {
        ...state,
        ...action.user,
        loading: false
      };

    case types.FAILED:
      return {
        ...initialState
      };

    case types.ERROR:
      return {
        ...initialState
      };

    case globalTypes.LOGOUT:
      removeFromSessionStorage(USER);
      return state;

    default:
      return state;
  }
};
