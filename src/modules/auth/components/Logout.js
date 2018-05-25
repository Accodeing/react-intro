import React from "react";
import styled from "styled-components";

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

export default Logout;
