import React from "react";
import { Rnd } from "react-rnd";
import internet from "../resources/internet.ico";
import exit from "../resources/exit.png";
import max from "../resources/max.png";

const Project2 = props => {
  return (
    <Rnd
      style={{ zIndex: 1 }}
      className="resume-window"
      default={{
        x: 80,
        y: 80,
        width: 840,
        height: 600
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={internet} alt="internet" />
        <img
          className="option-max"
          name="intro-window"
          onClick={e => props.handleSize(e)}
          src={max}
          alt="max window"
        />
        <img
          className="option-close"
          name="project1"
          onClick={e => props.onClick(e)}
          src={exit}
          alt="close window"
        />
      </div>
      <div className="sub-option-bar">
        <a
          className="resume-download"
          href="https://cold-beer-stomach.surge.sh/"
          ttarget="_blank noopener"
        >
          Project 2
        </a>
        <a
          className="github-source"
          href="https://github.com/RicoVendritto/project-2"
          target="_blank noopener"
        >
          GitHub
        </a>
      </div>
      <iframe
        title="project-2"
        className="project-window project2"
        src="https://cold-beer-stomach.surge.sh/"
      ></iframe>
    </Rnd>
  );
};

export default Project2;
