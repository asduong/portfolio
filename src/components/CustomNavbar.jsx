import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./CustomNavbar.css";

export default class CustomNavbar extends React.Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar>
          <Navbar.Brand className="brand-style">
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar>
        <Navbar.Collapse>
          <Nav>
            <NavLink className="about-style" eventkey={1} to="/about">
              About Me
            </NavLink>
            <NavLink className="project-style" eventkey={2} to="/projects">
              Projects
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
