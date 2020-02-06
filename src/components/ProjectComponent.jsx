import React from "react";
import { Image } from "react-bootstrap";
import "./ProjectComponent.css";

const ProjectComponent = props => {
  return (
    <div>
      <div className="title-style">{props.title}</div>
      <p>{props.content}</p>
      <p>
        <strong>Tech Stack: </strong>
        {props.tech}
      </p>
      <p>
        <strong>Github:</strong>{" "}
        <a href={props.link}>
          <u>{props.title}</u>
        </a>{" "}
        <br />
        <strong>API: </strong>
        {props.API}
      </p>
      <p>
        <strong>{props.description}</strong>
      </p>
      <Image src={props.img} alt=""></Image>
      <p>{props.details}</p>
      <hr></hr>
    </div>
  );
};

export default ProjectComponent;
