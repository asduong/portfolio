import React from "react";

const ProjectComponent = props => {
  return (
    <div>
      <h2>{props.title}</h2>
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
      <img src={props.img} alt="Project Image"></img>
      <hr></hr>
    </div>
  );
};

export default ProjectComponent;
