import React from "react";
import { Rnd } from "react-rnd";
import internet from "../resources/internet.ico";
import exit from "../resources/exit.png";

const Project2 = props => {
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
          Beer & Brewery App
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
