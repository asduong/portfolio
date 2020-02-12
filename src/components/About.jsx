import React from "react";
import "./About.css";

const About = () => {
  const csa = require("../images/aws-csa.png");
  const developer = require("../images/aws-developer.png");
  const sysops = require("../images/aws-sysops.png");
  return (
    <div className="about-content about-responsive-content">
      <h1 className="about-title">About</h1>
      <hr></hr>
      <p>
        Hello, my name is Andrew Duong. I am a Toronto based full stack web
        developer. I love to solve interesting problems.{" "}
        <a
          href="https://github.com/asduong/LeetCode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>Here</u>
        </a>{" "}
        are some of the problems I've solved on LeetCode.
      </p>

      <p>
        As a former IT Operations Engineer, I've learned to deal with problems
        on a daily basis. Whether it was the servers on AWS, or problems with a
        users computer. This has drastically improved my problem solving skills
        and has taught me how to Google things better. I've always known that
        creating value, solving problems, and self improvement was something I
        love doing. Becoming a web developer was a natural extension of those
        traits.
      </p>
      <p>
        Since graduating from Lighthouse Labs' full-time Web Development
        bootcamp, I have taken a few courses to help strengthen my skills on
        Udemy.{" "}
        <u>
          <a href="https://github.com/asduong">Here</a>
        </u>{" "}
        is my Github to view some of my new projects that I've worked on since
        attending bootcamp.
      </p>

      <hr></hr>
      <div>
        <h4>Courses</h4>
        <ul>
          <li>Andrew Mead: The Complete Node.js Developer Course</li>
          <li>
            Bianca Gandolfo: JavaScript: From Fundamentals to Functional JS
          </li>
          <li>Stephen Grider: Modern React with Redux</li>
        </ul>
        <hr></hr>
      </div>
      <div>
        <div className="certification-style">
          Below are some of the certifications I've obtained:
        </div>
        <img src={csa} alt="Certified Solutions Architect"></img>
        <img src={developer} alt="Certified Developer"></img>
        <img src={sysops} alt="Certified SysOps Administrator"></img>
      </div>
      <hr></hr>
    </div>
  );
};

export default About;
