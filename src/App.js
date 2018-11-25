import React, { Component } from "react";
import Dropzone from "react-dropzone";

import DeviceManager from "./DeviceManager";
import Nav from "./components/Nav";

import "@blueprintjs/core/lib/css/blueprint.css";
import "./App.css";

class App extends Component {
  state = { files: [] };

  onDrop(files) {
    console.log(files);
    this.setState({
      files
    });
  }

  onCancel() {
    this.setState({
      files: []
    });
  }
  render() {
    return (
      <Dropzone
        className="App"
        onDrop={this.onDrop}
        onCancel={this.onCancel}
        disableClick
      >
        <DeviceManager />
        <Nav />
      </Dropzone>
    );
  }
}

export default App;
