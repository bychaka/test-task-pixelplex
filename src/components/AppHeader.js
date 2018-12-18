import React, { Component } from "react";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";

class AppHeader extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">
          <img
            src="https://image.ibb.co/k7cmVT/logo_w.png"
            width="200"
            className="d-inline-block align-top"
            alt="PixelPlex logo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home link</Nav.Link>
          <Nav.Link href="https://pixelplex.io" target="_blank">
            Pixelplex link
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default AppHeader;
