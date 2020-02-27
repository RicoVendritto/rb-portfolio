import React from "react";
import { Rnd } from "react-rnd";
import internet from "../resources/internet.ico";
import exit from "../resources/exit.png";

const Project5 = props => {
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
          name="project5"
          onClick={e => props.onClick(e)}
          src={exit}
        />
      </div>
      <div className="sub-option-bar">
        <a
          className="resume-download"
          href="http://cornerbistro.surge.sh"
          target="_blank"
        >
          Project 5
        </a>
      </div>
      <iframe
        className="project-window project5"
        src="http://cornerbistro.surge.sh"
      ></iframe>
    </Rnd>
  );
};

export default Project5;
