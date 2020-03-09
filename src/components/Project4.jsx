import React from "react";
import { Rnd } from "react-rnd";
import internet from "../resources/internet.ico";
import exit from "../resources/exit.png";
import max from "../resources/max.png";

const Project4 = props => {
  return (
    <Rnd
      style={{ zIndex: 1 }}
      className="resume-window"
      default={{
        x: 120,
        y: 120,
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
          name="project4"
          onClick={e => props.onClick(e)}
          src={exit}
        />
      </div>
      <div className="sub-option-bar">
        <a
          className="resume-download"
          href="https://d18x4f8ekbpqmh.cloudfront.net/"
          target="_blank"
        >
          Project 4
        </a>
        <a
          className="github-source"
          href="https://github.com/RicoVendritto/Project-4"
          target="_blank"
        >
          GitHub
        </a>
      </div>
      <iframe
        className="project-window project4"
        src="https://d18x4f8ekbpqmh.cloudfront.net/"
      ></iframe>
    </Rnd>
  );
};

export default Project4;
