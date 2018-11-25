import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { Alert } from "@blueprintjs/core";

import DeviceManager from "./DeviceManager";
import Nav from "./components/Nav";
import Images from "./components/Images";

import "@blueprintjs/core/lib/css/blueprint.css";
import "./App.css";

class App extends Component {
  state = { files: [], isHovering: false, acceptedFiles: [] };

  onDrop(files) {
    console.log(files);
    const toKeep = files.acceptedFiles;
    this.setState(
      {
        isHovering: false,
        files: toKeep
      },
      () => console.log("done", this.state)
    );
  }

  onCancel() {
    this.setState({
      files: []
    });
  }

  onDragEnter() {
    console.log("entering 1lol");
    this.setState(
      {
        isHovering: true
      },
      () => console.log("entering", this.state.isHovering)
    );
  }

  onDragLeave() {
    this.setState(
      {
        isHovering: false
      },
      () => console.log("leaving", this.state.isHovering)
    );
  }

  render() {
    console.log("re-render", this.state);
    return (
      <Dropzone
        className="App"
        onDrop={this.onDrop}
        onCancel={this.onCancel}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        disableClick
      >
        <div style={{ width: "100vw", height: "100vh" }}>
          <Alert isOpen={this.state.isHovering}>
            <p>Drop files here!</p>
          </Alert>
          <DeviceManager />
          <Nav />
          <Images files={this.state.acceptedFiles} />
        </div>
      </Dropzone>
    );
  }
}

export default App;
