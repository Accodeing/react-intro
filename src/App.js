import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ToDos from "./components/ToDos";
import AddToDo from "./components/AddToDo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { title: "Äta pizza!", done: false, id: "a" },
        { title: "Städa efter pizza.", done: false, id: "b" },
        { title: "Intro to React.", done: true, id: "c" }
      ]
    };
  }

  toggleToDo = index => {
    const head = this.state.items.slice(0, index);
    const item = this.state.items[index];
    const tail = this.state.items.slice(index + 1);

    this.setState({ items: [...head, { ...item, done: !item.done }, ...tail] });
  };

  addToDo = todo => {
    this.setState({ items: [...this.state.items, todo] });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ToDO in React</h1>
        </header>
        <ToDos toggle={this.toggleToDo} items={this.state.items} />
        <AddToDo addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;
