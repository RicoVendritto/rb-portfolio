import React from "react";
import { Rnd } from "react-rnd";

// Custom Resources

import internet from "../resources/internet.ico";
import exit from "../resources/exit.png";
import max from "../resources/max.png";

const Project5 = props => {
  return (
    <Rnd
      style={{ zIndex: 1 }}
      className="resume-window"
      default={{
        x: 140,
        y: 140,
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
          name="project5"
          onClick={e => props.onClick(e)}
          src={exit}
        />
      </div>
      <div className="sub-option-bar">
        <a
          className="resume-download"
          href="https://cornerbistro.surge.sh"
          target="_blank"
        >
          UXDI Colab
        </a>
        <a
          className="github-source"
          href="https://github.com/RicoVendritto/Project_UX_SEI"
          target="_blank"
        >
          GitHub
        </a>
      </div>
      <iframe
        className="project-window project5"
        src="https://cornerbistro.surge.sh"
      ></iframe>
    </Rnd>
  );
};

export default Project5;
