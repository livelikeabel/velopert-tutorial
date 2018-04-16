import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PhoneForm from "./components/PhoneForm";

class App extends Component {
  handleCreate = data => {
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PhoneForm onCreate={this.handleCreate} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
