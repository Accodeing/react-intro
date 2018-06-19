import React from "react";

import { connect } from "react-redux";

import LoginComponent from "../modules/session/components/Login";

const Login = props => (
  <LoginComponent token={props.token} loginSuccess={props.loginSuccess} />
);

const mapStateToProps = state => ({
  token: state.session.token
});

export default connect(mapStateToProps)(Login);
