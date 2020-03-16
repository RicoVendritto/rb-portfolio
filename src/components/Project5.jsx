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
      className="project5-window rnd-window"
      default={{
        x: 140,
        y: 140,
        width: 840,
        height: 600
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={internet} alt="internet" />
        <img
          className="option-max"
          name="project5-window"
          onClick={e => props.handleSize(e)}
          src={max}
          alt="max window"
        />
        <img
          className="option-close"
          name="project5"
          onClick={e => props.onClick(e)}
          src={exit}
          alt="close window"
        />
      </div>
      <div className="sub-option-bar">
        <a
          className="resume-download"
          href="https://cornerbistro.surge.sh"
          target="_blank noopener"
        >
          UXDI Colab
        </a>
        <a
          className="github-source"
          href="https://github.com/RicoVendritto/Project_UX_SEI"
          target="_blank noopener"
        >
          GitHub
        </a>
      </div>
      <iframe
        title="project-5"
        className="project-window project5"
        src="https://cornerbistro.surge.sh"
      ></iframe>
    </Rnd>
  );
};

export default Project5;
