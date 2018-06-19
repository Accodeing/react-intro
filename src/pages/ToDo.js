import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { toggle, add } from "../modules/todo/actions.js";

import ToDos from "../components/ToDos";
import AddToDo from "../components/AddToDo";

const ToDo = props => (
  <React.Fragment>
    <ToDos toggle={props.toggle} items={props.items} />
    <AddToDo add={props.add} />
    {props.user.loading && <p>User is loading</p>}
    {!props.user.loading && <p>{props.user.name}</p>}
  </React.Fragment>
);

const mapStateToProps = state => ({
  items: state.todo.items,
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggle,
      add
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
