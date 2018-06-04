import * as types from "./action_types.js";
import * as globalTypes from "../action_types.js";
import {
  saveToSessionStorage,
  loadFromSessionStorage,
  removeFromSessionStorage,
  TOKEN
} from "../sessionStorage.js";

const initialState = {
  processing: false,
  token: loadFromSessionStorage(TOKEN)
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUESTING:
      return {
        ...state,
        processing: true
      };

    case types.SUCCESSFUL:
      saveToSessionStorage(TOKEN, action.token);
      return {
        ...state,
        processing: false,
        token: action.token
      };

    case types.FAILED:
      return {
        ...state,
        processing: false
      };

    case types.ERROR:
      return {
        ...state,
        processing: false
      };

    case globalTypes.LOGOUT:
      removeFromSessionStorage(TOKEN);
      return {
        ...state,
        token: null
      };

    default:
      return state;
  }
};
