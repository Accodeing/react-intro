import axios from "axios";

import { history } from "../../store";
import * as types from "./action_types.js";
import * as globalTypes from "../action_types.js";

export const login = (username, password) => {
  return dispatch => {
    dispatch({
      type: types.REQUESTING
    });

    axios
      .post("https://reqres.in/api/login", {
        username,
        password
      })
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: types.SUCCESSFUL,
            token: response.data.token
          });
          dispatch({
            type: globalTypes.LOGIN
          });
          history.push("/");
        } else {
          dispatch({
            type: types.FAILED
          });
        }
      })
      .catch(error => {
        dispatch({
          type: types.ERROR
        });
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({
      type: globalTypes.LOGOUT
    });
    history.push("/auth");
  };
};
