import React from "react";
import styled from "styled-components";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { logout } from "../../../state/session/actions.js";

const StyledButton = styled.button`
  margin: 15px 0;
  width: 100%;
  color: #fff;
  background: #232322;
  font-size: 1em;
  line-height: 2em;
  border: none;
  box-shadow: 0 2px 5px #000000aa;
`;

const Logout = props => {
  if (!props.token) return null;
  return <StyledButton onClick={props.logout}>Logga ut</StyledButton>;
};

const mapStateToProps = state => ({
  token: state.session.token
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
