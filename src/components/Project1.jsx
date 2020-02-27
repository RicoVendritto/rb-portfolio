import React from "react";
import resume from "../resources/resume.pdf";
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
          href="http://championsleague-followyourteam.surge.sh"
          target="_blank"
        >
          Project 1
        </a>
      </div>
      <iframe
        className="project-window project1"
        src="http://championsleague-followyourteam.surge.sh"
      ></iframe>
    </Rnd>
  );
};

export default Project1;
