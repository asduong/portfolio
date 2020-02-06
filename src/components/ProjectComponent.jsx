import React from "react";
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
        <strong>Github:</strong> <a href={props.link}>{props.title}</a> <br />
        <strong>API: </strong>
        {props.API}
      </p>
      <p>
        <strong>{props.description}</strong>
      </p>
      <img src={props.img} alt=""></img>
      <p>{props.details}</p>
      <hr></hr>
    </div>
  );
};

export default ProjectComponent;
