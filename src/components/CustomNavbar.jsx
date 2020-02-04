import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CustomNavbar extends React.Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Brand>
          <Link to="/">AD</Link>
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} to="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} to="/projects">
              Projects
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
