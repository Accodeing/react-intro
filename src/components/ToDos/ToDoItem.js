import React, { Component } from "react";

class ToDoItem extends Component {
  render() {
    return (
      <li
        onClick={() => this.props.toggle(this.props.index)}
        className={this.props.done ? "done" : ""}
      >
        {this.props.title}
      </li>
    );
  }
}

export default ToDoItem;
