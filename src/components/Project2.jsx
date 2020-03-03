import React from "react";
import { Rnd } from "react-rnd";
import internet from "../resources/internet.ico";
import exit from "../resources/exit.png";

const Project2 = props => {
  return (
    <Rnd
      style={{ zIndex: 1 }}
      className="resume-window"
      default={{
        x: 140,
        y: 140,
        width: 420,
        height: 300
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={internet} />
        <img
          className="option-close"
          name="project2"
          onClick={e => props.onClick(e)}
          src={exit}
        />
      </div>
      <div className="sub-option-bar">
        <a
          className="resume-download"
          href="https://cold-beer-stomach.surge.sh/"
          target="_blank"
        >
          Project 2
        </a>
        <a
          className="github-source"
          href="https://github.com/RicoVendritto/project-2"
          Ï
          target="_blank"
        >
          GitHub
        </a>
      </div>
      <iframe
        className="project-window project2"
        src="https://cold-beer-stomach.surge.sh/"
      ></iframe>
    </Rnd>
  );
};

export default Project2;
