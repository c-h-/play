import React, { Component } from "react";
import { Card, Button, Elevation } from "@blueprintjs/core";

class Images extends Component {
  render() {
    console.log("files", this.props.files);
    return (
      <div>
        {this.props.files.forEach(file => {
          return (
            <Card interactive={true} elevation={Elevation.TWO}>
              <img src={file.path} />
            </Card>
          );
        })}
      </div>
    );
  }
}

export default Images;
