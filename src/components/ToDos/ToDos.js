import React from "react";
import PropTypes from "prop-types";

import Item from "./ToDoItem";

ToDos.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    })
  ),
  toggle: PropTypes.func.isRequired
};

ToDos.defaultProps = {
  items: []
};

function ToDos({ toggle, items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <Item
          index={index}
          toggle={toggle}
          key={item.id}
          title={item.title}
          done={item.done}
          id={item.id}
        />
      ))}
    </ul>
  );
}

export default ToDos;
