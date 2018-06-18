import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

const AuthenticatedRoute = props => {
  const Component = props.token ? Route : Redirect;
  const to = props.token ? props.to : "/login";
  if (window.location.pathname === "/login") return null;
  return <Component {...props} to={to} />;
};

const mapStateToProps = state => ({
  token: state.session.token
});

export default connect(mapStateToProps)(AuthenticatedRoute);
