import * as actionCreators from "./action_creators.js";

export const toggle = index => {
  return dispatch => {
    dispatch(actionCreators.toggle(index));
  };
};

export const add = title => {
  return dispatch => {
    dispatch(
      actionCreators.add({
        title,
        done: false,
        id: Math.floor(Math.random() * Math.floor(10000)).toString()
      })
    );
  };
};
