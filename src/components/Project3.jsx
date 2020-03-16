import React from "react";
import { Rnd } from "react-rnd";
import internet from "../resources/internet.ico";
import exit from "../resources/exit.png";
import max from "../resources/max.png";
import min from "../resources/min.png";

const Project3 = props => {
  return (
    <Rnd
      style={{ zIndex: 1 }}
      className="project3-window rnd-window"
      default={{
        x: 100,
        y: 100,
        width: 840,
        height: 600
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={internet} alt="internet" />
        <img
          className="option-min"
          name="project3-window"
          onClick={e => props.handleSizeMin(e)}
          src={min}
          alt="min window"
        />
        <img
          className="option-max"
          name="project3-window"
          onClick={e => props.handleSizeMax(e)}
          src={max}
          alt="max window"
        />
        <img
          className="option-close"
          name="project3"
          onClick={e => props.onClick(e)}
          src={exit}
          alt="close window"
        />
      </div>
      <div className="sub-option-bar">
        <a
          className="resume-download"
          href="https://raysp3.surge.sh"
          target="_blank noopener"
        >
          Project 3
        </a>
        <a
          className="github-source"
          href="https://github.com/RicoVendritto/Project-3"
          target="_blank noopener"
        >
          GitHub
        </a>
      </div>
      <iframe
        title="project-3"
        className="project-window project3"
        src="https://raysp3.surge.sh"
      ></iframe>
    </Rnd>
  );
};

export default Project3;
