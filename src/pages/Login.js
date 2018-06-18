import React from "react";

import { connect } from "react-redux";

import LoginComponent from "../modules/auth/components/Login";

const Login = props => (
  <main>
    <LoginComponent token={props.token} loginSuccess={props.loginSuccess} />
  </main>
);

const mapStateToProps = state => ({
  token: state.session.token
});

export default connect(mapStateToProps)(Login);
