import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store, { history } from "./store";

window.state = { greeting: "Hello World" };

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App myState={window.state} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
