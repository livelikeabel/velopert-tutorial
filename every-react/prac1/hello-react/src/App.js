import React, { Component } from "react";
import MyName from "./MyName";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div>
        <MyName name="abel" />
        <Counter />
      </div>
    );
  }
}

export default App;
