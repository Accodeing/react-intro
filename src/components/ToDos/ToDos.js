import React, { Component } from "react";

import Item from "./ToDoItem";

class ToDos extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <Item
            index={index}
            toggle={this.props.toggle}
            key={item.id}
            title={item.title}
            done={item.done}
            id={item.id}
          />
        ))}
      </ul>
    );
  }
}

export default ToDos;
