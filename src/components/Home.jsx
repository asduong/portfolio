import React from "react";
import "./Home.css";
import { ReactComponent as Icon } from "../icons/cat.svg";
import { ReactComponent as Mail } from "../icons/mail.svg";
import { ReactComponent as LinkedIn } from "../icons/linkedin.svg";

class Home extends React.Component {
  render() {
    return (
      <div className="content home-responsive-content">
        <h1>
          Hello, I'm <span className="highlight">Andrew Duong</span>.
        </h1>
        <h1>I'm a full stack web developer.</h1>
        <div className="icon-style">
          <a
            href="https://github.com/asduong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon height={25} width={42} fill={"currentColor"}></Icon>
          </a>
          <a
            href="mailto:duongandrews@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail height={25} width={42} fill={"currentColor"}></Mail>
          </a>
          <a
            href="https://www.linkedin.com/in/duong-andrew/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn height={25} width={42} fill={"currentColor"}></LinkedIn>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
