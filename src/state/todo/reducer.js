import * as types from "./action_types.js";

const initialState = {
  items: [
    { title: "Äta pizza!", done: false, id: "a" },
    { title: "Städa efter pizza.", done: false, id: "b" },
    { title: "Intro to React.", done: true, id: "c" }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE:
      const head = state.items.slice(0, action.index);
      const item = state.items[action.index];
      const tail = state.items.slice(action.index + 1);

      return {
        ...state,
        items: [...head, { ...item, done: !item.done }, ...tail]
      };

    case types.ADD:
      return { items: [...state.items, action.item] };

    default:
      return state;
  }
};
