import React from "react";
import { Rnd } from "react-rnd";
import internet from "../resources/internet.ico";
import exit from "../resources/exit.png";
import max from "../resources/max.png";
import min from "../resources/min.png";

const Project4 = props => {
  return (
    <Rnd
      style={{ zIndex: 1 }}
      className="project4-window rnd-window"
      default={{
        x: 120,
        y: 120,
        width: 840,
        height: 600
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={internet} alt="internet" />
        <img
          className="option-min"
          name="project4-window"
          onClick={e => props.handleSizeMin(e)}
          src={min}
          alt="min window"
        />
        <img
          className="option-max"
          name="project4-window"
          onClick={e => props.handleSizeMax(e)}
          src={max}
          alt="max window"
        />
        <img
          className="option-close"
          name="project4"
          onClick={e => props.onClick(e)}
          src={exit}
          alt="close window"
        />
      </div>
      <div className="sub-option-bar">
        <a
          className="resume-download"
          href="https://d18x4f8ekbpqmh.cloudfront.net/"
          target="_blank noopener"
        >
          Project 4
        </a>
        <a
          className="github-source"
          href="https://github.com/RicoVendritto/Project-4"
          target="_blank noopener"
        >
          GitHub
        </a>
      </div>
      <iframe
        title="project-4"
        className="project-window project4"
        src="https://d18x4f8ekbpqmh.cloudfront.net/"
      ></iframe>
    </Rnd>
  );
};

export default Project4;
