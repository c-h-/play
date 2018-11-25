import React, { Component } from "react";
import "./App.css";

export default class DeviceManager extends Component {
  componentDidMount() {
    if (process.env.IS_ELECTRON) {
      // const serialport = require('serialport');
      // // will show connected serialport devices if any
      // serialport.list().then(list => console.log(list));
      const usbDetect = require("usb-detection");
      usbDetect.startMonitoring();
      usbDetect.on("add", function(device) {
        console.log("add", device);
      });
      usbDetect.on("add:vid", function(device) {
        console.log("add", device);
      });
      usbDetect.on("add:vid:pid", function(device) {
        console.log("add", device);
      });

      // Detect remove
      usbDetect.on("remove", function(device) {
        console.log("remove", device);
      });
      usbDetect.on("remove:vid", function(device) {
        console.log("remove", device);
      });
      usbDetect.on("remove:vid:pid", function(device) {
        console.log("remove", device);
      });

      // Detect add or remove (change)
      usbDetect.on("change", function(device) {
        console.log("change", device);
      });
      usbDetect.on("change:vid", function(device) {
        console.log("change", device);
      });
      usbDetect.on("change:vid:pid", function(device) {
        console.log("change", device);
      });

      usbDetect
        .find()
        .then(function(devices) {
          console.log(devices);
          usbDetect.stopMonitoring();
        })
        .catch(function(err) {
          console.log(err);
          usbDetect.stopMonitoring();
        });
      console.info("Electron detected");
    } else {
      console.warn(
        "Browser detected - this project was built to run in Electron only"
      );
    }
  }
  render() {
    return null;
  }
}
