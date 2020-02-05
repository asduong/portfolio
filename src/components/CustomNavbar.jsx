import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";

export default class CustomNavbar extends React.Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} to="/about">
              About
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} to="/projects">
              Projects
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
