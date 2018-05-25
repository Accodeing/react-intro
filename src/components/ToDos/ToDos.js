import React from "react";

import Item from "./ToDoItem";

const ToDos = props => (
  <ul>
    {props.items.map((item, index) => (
      <Item
        index={index}
        toggle={props.toggle}
        key={item.id}
        title={item.title}
        done={item.done}
        id={item.id}
      />
    ))}
  </ul>
);

export default ToDos;
