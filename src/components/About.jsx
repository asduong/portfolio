import React from "react";
import "./About.css";

const About = () => {
  const csa = require("../images/aws-csa.png");
  const developer = require("../images/aws-developer.png");
  const sysops = require("../images/aws-sysops.png");
  return (
    <div className="about-content">
      <h1 className="title-style">About</h1>
      <hr></hr>
      <p>
        Hello, my name is Andrew Duong. I am a Toronto based full stack web
        developer. I love to solve challenging problems.
      </p>

      <p>
        In 2017, I studied for and obtained the AWS Certified Solutions
        Architect - Associate certification. I achieved one of my goals for the
        year and decided to study for the other two associate certifications
        from Amazon Web Services (AWS Certified Developer and AWS Certified
        SysOps Administrator).
      </p>
      <p>
        This lead me to Nomis Solutions, where I worked as an IT Operations
        Engineer for two years. I was able to apply the things I learned from my
        AWS studies and met some amazing people. These people inspired me to
        delve deeper into coding as I was seeing the challenges they face on a
        day to day basis.
      </p>
      <p>
        I ended up taking a part time Web Development bootcamp at Juno College
        (Formerly HackerYou) in 2018-2019 after work and loved it. I decided
        that I was going to take a full time bootcamp and found out about
        Lighthouse Labs.
      </p>
      <img src={csa} alt="Certified Solutions Architect"></img>
      <img src={developer} alt="Certified Developer"></img>
      <img src={sysops} alt="Certified SysOps Administrator"></img>
    </div>
  );
};

export default About;
