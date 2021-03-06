import React, { Component } from "react";
import { Alignment, Button, Navbar } from "@blueprintjs/core";

class Nav extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Cull</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
          <Button className="bp3-minimal" icon="document" text="Files" />
        </Navbar.Group>
      </Navbar>
    );
  }
}

export default Nav;
