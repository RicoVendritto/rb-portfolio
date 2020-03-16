import React from "react";
import { Rnd } from "react-rnd";
import internet from "../resources/internet.ico";
import exit from "../resources/exit.png";
import max from "../resources/max.png";

const Project1 = props => {
  return (
    <Rnd
      style={{ zIndex: 1 }}
      className="project1-window rnd-window"
      default={{
        x: 60,
        y: 60,
        width: 840,
        height: 600
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={internet} alt="internet" />
        <img
          className="option-max"
          name="project1-window"
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
          href="https://championsleague-followyourteam.surge.sh/"
          target="_blank noopener"
        >
          Project 1
        </a>
        <a
          className="github-source"
          href="https://github.com/RicoVendritto/project_1"
          target="_blank noopener"
        >
          GitHub
        </a>
      </div>
      <embed
        className="project-window project1"
        src="https://championsleague-followyourteam.surge.sh/"
      ></embed>
    </Rnd>
  );
};

export default Project1;
