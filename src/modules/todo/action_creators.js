import * as types from "./action_types.js";

export const toggle = index => ({
  type: types.TOGGLE,
  index
});

export const add = item => ({
  type: types.ADD,
  item
});
