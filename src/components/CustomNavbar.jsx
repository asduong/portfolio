import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Logo.scss";
import "./Navbar.scss";
import ThemeToggle from "./ThemeToggle";

export default class CustomNavbar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" className="header">
        <Navbar.Brand className="logo" to="/" eventkey={1} as={Link}>
          <span className="logo__mark">></span>
          <span className="logo__text">$ cd /home/</span>
          <span className="logo__cursor"></span>
        </Navbar.Brand>
        <ThemeToggle />
        <Navbar.Toggle className="ml-auto" />
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
