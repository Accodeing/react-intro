import React, { Component } from "react";

class AddToDo extends Component {
  create = event => {
    event.preventDefault();

    this.props.add({
      title: this.el.value,
      done: false,
      id: Math.random(12)
    });

    this.form.reset();
  };

  render() {
    return (
      <form ref={el => (this.form = el)} onSubmit={this.create}>
        <input type="text" ref={el => (this.el = el)} />
        <input type="submit" value="Skapa" />
      </form>
    );
  }
}

export default AddToDo;
