import * as actionCreators from "./action_creators.js";

export const toggle = index => {
  return dispatch => {
    dispatch(actionCreators.toggle(index));
  };
};

export const add = todo => {
  return dispatch => {
    dispatch(actionCreators.add(todo));
  };
};
