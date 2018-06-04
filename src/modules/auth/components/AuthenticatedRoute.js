import React from "react";
import { Route, Redirect } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { login } from "../../../state/session/actions.js";

const AuthenticatedRoute = props => {
  const Component = props.token ? Route : Redirect;
  const to = props.token ? props.to : "/login";
  if (window.location.pathname === "/login") return null;
  return <Component {...props} to={to} />;
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedRoute);
