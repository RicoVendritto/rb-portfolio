import React from "react";
import { Rnd } from "react-rnd";
import internet from "../resources/internet.ico";
import exit from "../resources/exit.png";

const Project4 = props => {
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
          IEDB - Int. EDM Database
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
