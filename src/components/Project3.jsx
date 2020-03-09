import React from "react";
import { Rnd } from "react-rnd";
import internet from "../resources/internet.ico";
import exit from "../resources/exit.png";
import max from "../resources/max.png";

const Project3 = props => {
  return (
    <Rnd
      style={{ zIndex: 1 }}
      className="resume-window"
      default={{
        x: 100,
        y: 100,
        width: 840,
        height: 600
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={internet} />
        <img
          className="option-max"
          name="intro-window"
          onClick={e => props.handleSize(e)}
          src={max}
        />
        <img
          className="option-close"
          name="project3"
          onClick={e => props.onClick(e)}
          src={exit}
        />
      </div>
      <div className="sub-option-bar">
        <a
          className="resume-download"
          href="https://raysp3.surge.sh"
          target="_blank"
        >
          Project 3
        </a>
        <a
          className="github-source"
          href="https://github.com/RicoVendritto/Project-3"
          target="_blank"
        >
          GitHub
        </a>
      </div>
      <iframe
        className="project-window project3"
        src="https://raysp3.surge.sh"
      ></iframe>
    </Rnd>
  );
};

export default Project3;
