import React from "react";
import ProjectComponent from "./ProjectComponent";
import "./Projects.css";

const Projects = () => {
  const roundup = require("../images/roundup.png");
  const nightowl = require("../images/main.png");
  const search = require("../images/search.png");
  const selectedSongs = require("../images/selectedsong.png");
  const dispatcher = require("../images/dispatcher.png");
  return (
    <div className="project-content project-responsive-content">
      <h1 className="project-title">Projects</h1>
      <hr></hr>
      <ProjectComponent
        title="Driver Dispatcher"
        content="An application to help the dispatcher manage multiple driver's schedule by creating and editing events. The dispatcher will be able to filter each driver's schedule as well as export their schedules out to a CSV file."
        tech="ReactJS"
        link="https://github.com/asduong/dispatcher"
        description="Driver Dispatcher Calendar View"
        img={dispatcher}
      ></ProjectComponent>
      <ProjectComponent
        title="Song Details List"
        content="A simple application to display details of a song when selected using Redux to manage state"
        tech="ReactJS, Redux"
        link="https://github.com/asduong/songs"
        description="Selected Song Details"
        img={selectedSongs}
      ></ProjectComponent>
      <ProjectComponent
        title="Photo Search Engine - Unsplash API"
        content="This photo search engine utilizes the Unsplash API to help users search for free high-resolution photos."
        tech="ReactJS, Axios"
        link="https://github.com/asduong/unsplash-image-search-react"
        description="Photo Search Bar"
        img={search}
      ></ProjectComponent>
      <ProjectComponent
        title="Night Owl"
        content="Night Owl is an application that helps users find bars and clubs around using user pooled data. Users will be able to use the filters in the application to help them find their specified needs for the night. Night Owl is an all-in-one application to help users get from their location to the destination utilizing Uber's API and Google Maps API."
        tech="ReactJS, NodeJS, Express, PostgreSQL"
        link="https://github.com/asduong/NightOwl-FrontEnd"
        description="Main Page View"
        img={nightowl}
        details="More images available on Github."
      ></ProjectComponent>
      <ProjectComponent
        title="Round Up"
        content="An event proposal application where users can generate an event proposal with multiple possible event start times for invitees to RSVP. A unique URL is generated every time a new event is created and invitees can follow the URL to cast their RSVP or edit their existing RVSP. Users will be able to visually see results for every other invitee that has already RSVP-ed."
        tech="NodeJS, JQuery, Express, PostgreSQL, Fomantic UI"
        link="https://github.com/asduong/project-roundup"
        description="Main Page View"
        img={roundup}
        details="More images available on Github."
      ></ProjectComponent>
    </div>
  );
};

export default Projects;
