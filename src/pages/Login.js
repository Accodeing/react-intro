import React from "react";

import LoginComponent from "../modules/auth/components/Login";

const Login = props => (
  <main>
    <LoginComponent token={props.token} loginSuccess={props.loginSuccess} />
  </main>
);

export default Login;
