import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";

export default class CustomNavbar extends React.Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand to="/" eventkey={1} as={Link}>
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link to="/about" eventkey={2} as={Link}>
              About
            </Nav.Link>
            <Nav.Link to="/projects" eventkey={3} as={Link}>
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
