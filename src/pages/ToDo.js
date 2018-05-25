import React from "react";

import ToDos from "../components/ToDos";
import AddToDo from "../components/AddToDo";

const ToDo = props => (
  <main>
    <ToDos toggle={props.toggle} items={props.items} />
    <AddToDo addToDo={props.addToDo} />
  </main>
);

export default ToDo;
