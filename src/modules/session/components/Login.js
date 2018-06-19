import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { login } from "../../../modules/session/actions.js";

const Panel = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 25px 0;
  & label {
    min-width: 75px;
    display: inline-block;
    text-align: right;
    padding-right: 20px;
    margin: 5px 0;
  }
  & input {
    border: 1px solid #000000aa;
    font-size: 1em;
  }
`;

const Submit = styled.input`
  margin: 15px 0;
  width: 100%;
  color: #fff;
  background: #232322;
  font-size: 1em;
  line-height: 2em;
  border: none;
  box-shadow: 0 2px 5px #000000aa;
`;

const Error = styled.p`
  background: #ff6300a8;
  color: white;
  padding: 15px 25px;
  border: 1px solid #ff6300;
`;

class Login extends React.Component {
  state = {
    formData: {
      password: "",
      email: ""
    },
    loading: false,
    error: null
  };

  static propTypes = {
    token: PropTypes.string,
    login: PropTypes.func.isRequired
  };

  static defaultProps = {
    token: null
  };

  onChange = event => {
    event.preventDefault();
    const el = event.currentTarget;
    const name = el.name;
    this.setState({ formData: { ...this.state.formData, [name]: el.value } });
  };

  onSubmit = event => {
    this.setState({ loading: true, error: null });
    event.preventDefault();
    this.props.login(this.state.formData.email, this.state.formData.password);
    this.form.reset();
  };

  render() {
    const { loading, error, formData: { email, password } } = this.state;
    const { token } = this.props;

    if (token) return <Redirect to="/" />;

    return (
      <Panel>
        <form ref={el => (this.form = el)} onSubmit={this.onSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            onChange={this.onChange}
            data-name={"email"}
            type="text"
            name="email"
            id="email"
            value={email}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            onChange={this.onChange}
            data-name={"password"}
            type="password"
            name="password"
            id="password"
            value={password}
          />
          <br />
          {error && <Error>{error.data.error}</Error>}
          <Submit
            type="submit"
            disable={loading}
            value={loading ? "Loading ..." : "Logga in"}
          />
        </form>
      </Panel>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Login);
