import React from "react";
import { Rnd } from "react-rnd";
import internet from "../resources/internet.ico";
import exit from "../resources/exit.png";

const Project1 = props => {
  return (
    <Rnd
      className="resume-window"
      default={{
        x: 100,
        y: 100,
        width: 320,
        height: 200
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={internet} />
        <img
          className="option-close"
          name="project1"
          onClick={e => props.onClick(e)}
          src={exit}
        />
      </div>
      <div className="sub-option-bar">
        <a
          className="resume-download"
          href="https://championsleague-followyourteam.surge.sh/"
          target="_blank"
        >
          Project 1
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
