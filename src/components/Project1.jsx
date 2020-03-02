import React from "react";
import { Rnd } from "react-rnd";
import internet from "../resources/internet.ico";
import exit from "../resources/exit.png";

const Project1 = props => {
  return (
    <Rnd
      className="resume-window"
      default={{
        x: 120,
        y: 120,
        width: 420,
        height: 300
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
          Champions League - Follow Your Team
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
