import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

if (process.env.IS_ELECTRON) {
  // const serialport = require('serialport');
  // // will show connected serialport devices if any
  // serialport.list().then(list => console.log(list));
  const usbDetect = require("usb-detection");
  usbDetect
    .find()
    .then(function(devices) {
      console.log(devices);
    })
    .catch(function(err) {
      console.log(err);
    });
  alert("Electron detected");
} else {
  alert("Browser detected");
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. hi sabina
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
