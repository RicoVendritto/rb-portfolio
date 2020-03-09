import React, { Component } from "react";
import { Rnd } from "react-rnd";

// Custom Resources
import skills from "../resources/skills.ico";
import exit from "../resources/exit.png";
import max from "../resources/max.png";

const Contact = props => {
  return (
    <Rnd
      style={{ zIndex: 1 }}
      className="resume-window"
      default={{
        x: 250,
        y: 220,
        width: 365,
        height: "45vh"
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={skills} />
        <img
          className="option-max"
          name="intro-window"
          onClick={e => props.handleSize(e)}
          src={max}
        />
        <img
          className="option-close"
          name="skills"
          onClick={e => props.onClick(e)}
          src={exit}
        />
      </div>
      <div className="sub-option-bar">
        <a className="resume-download" href="#">
          Skills
        </a>
      </div>
      <section className="skill-set">
        <i class="devicon-ruby-plain">
          <span>Ruby</span>
        </i>
        <i class="devicon-rails-plain">
          <span>Rails</span>
        </i>
        <i class="devicon-javascript-plain">
          <span>JavaScript</span>
        </i>
        <i class="devicon-html5-plain">
          <span>HTML</span>
        </i>
        <i class="devicon-css3-plain">
          <span>CSS</span>
        </i>
        <i class="devicon-sass-original">
          <span>Sass</span>
        </i>
        <i class="devicon-react-original">
          <span>React</span>
        </i>
        <i class="devicon-mongodb-plain">
          <span>MongoDB</span>
        </i>
        <i class="devicon-nodejs-plain">
          <span>Node.js</span>
        </i>
        <i class="devicon-express-original">
          <span>Express.js</span>
        </i>
        <i class="devicon-postgresql-plain">
          <span>PostgrSQL</span>
        </i>
        <i class="devicon-mysql-plain">
          <span>MySQL</span>
        </i>
        <i class="devicon-git-plain">
          <span>Git</span>
        </i>
        <i class="devicon-github-plain">
          <span>GitHub</span>
        </i>
        <i class="devicon-bootstrap-plain">
          <span>Bootstrap</span>
        </i>
        <i class="devicon-python-plain">
          <span>Python</span>
        </i>
        <i class="devicon-php-plain">
          <span>PHP</span>
        </i>
        <i class="devicon-illustrator-plain">
          <span>Illustrator</span>
        </i>
      </section>
    </Rnd>
  );
};

export default Contact;
