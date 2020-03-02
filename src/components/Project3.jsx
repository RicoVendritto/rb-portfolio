import React from "react";
import { Rnd } from "react-rnd";
import internet from "../resources/internet.ico";
import exit from "../resources/exit.png";

const Project3 = props => {
  return (
    <Rnd
      className="resume-window"
      default={{
        x: 160,
        y: 160,
        width: 420,
        height: 300
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={internet} />
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
