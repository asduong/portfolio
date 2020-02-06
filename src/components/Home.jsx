import React from "react";
import "./Home.css";
import { ReactComponent as Icon } from "../icons/cat.svg";
import { ReactComponent as Mail } from "../icons/mail.svg";
import { ReactComponent as LinkedIn } from "../icons/linkedin.svg";

class Home extends React.Component {
  render() {
    return (
      <div className="content">
        <h1>Andrew Duong</h1>
        <h5>Full Stack Developer</h5>
        <div>
          <a
            href="https://github.com/asduong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon height={25} width={40} fill={"#EAEAEA"}></Icon>
          </a>
          <a
            href="mailto:duongandrews@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail height={25} width={40} fill={"#EAEAEA"}></Mail>
          </a>
          <a
            href="https://www.linkedin.com/in/duong-andrew/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn height={25} width={40} fill={"#EAEAEA"}></LinkedIn>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
