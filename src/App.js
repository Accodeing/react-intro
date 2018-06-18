import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import AuthenticatedRoute from "./modules/auth/components/AuthenticatedRoute";
import Logout from "./modules/auth/components/Logout";
import ToDoPage from "./pages/ToDo";
import LoginPage from "./pages/Login";

class App extends Component {
  render() {
    return (
      <Switch>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to ToDO in React</h1>
          </header>
          <Logout />
          <Route path="/login" component={LoginPage} />
          <AuthenticatedRoute path="/" component={ToDoPage} />
        </div>
      </Switch>
    );
  }
}

export default App;
