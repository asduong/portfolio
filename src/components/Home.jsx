import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Andrew Duong</h2>
          <p>Full Stack Developer</p>
        </Jumbotron>
        <Link to="/about">
          <Button bsStyle="primary">About</Button>
        </Link>
      </Container>
    );
  }
}

export default Home;
