import React from "react";

import { MyList, MyObj } from "./MyList";

const toDo = [
  { id: 1, title: "go to gym", completed: true },
  { id: 2, title: "do the homeworks", completed: true },
  { id: 3, title: "watch some movies", completed: false },
  { id: 4, title: "sleep", completed: false },
];

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Exercise</h1>
        <h3>List of names:</h3>
        <MyList names={["Gianmarco", "Pesola", "Jimmy"]} />
        <h3>List of obj:</h3>
        <MyObj todos={toDo} />
      </div>
    );
  }
}
