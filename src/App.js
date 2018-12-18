import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import TaskOne from "./components/taskOne/TaskOne";
import TaskTwo from "./components/taskTwo/TaskTwo";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <TaskOne />
        <TaskTwo />
      </React.Fragment>
    );
  }
}

export default App;
