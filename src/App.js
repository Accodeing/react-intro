import React, { Component } from "react";
import { Route } from "react-router";

import logo from "./logo.svg";
import "./App.css";

import AuthenticatedRoute from "./modules/auth/components/AuthenticatedRoute";
import Logout from "./modules/auth/components/Logout";
import ToDoPage from "./pages/ToDo";
import LoginPage from "./pages/Login";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { title: "Äta pizza!", done: false, id: "a" },
        { title: "Städa efter pizza.", done: false, id: "b" },
        { title: "Intro to React.", done: true, id: "c" }
      ],
      user: { token: undefined }
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

  loginSuccess = token => {
    this.setState({ user: { token } });
  };

  logout = () => {
    this.setState({ user: { token: undefined } });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ToDO in React</h1>
        </header>
        <Logout logout={this.logout} token={this.state.user.token} />
        <AuthenticatedRoute
          exact
          path="/"
          token={this.state.user.token}
          render={() => (
            <ToDoPage
              toggle={this.toggleToDo}
              items={this.state.items}
              addToDo={this.addToDo}
            />
          )}
        />
        <Route
          path="/login"
          render={() => (
            <LoginPage
              token={this.state.user.token}
              loginSuccess={this.loginSuccess}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
