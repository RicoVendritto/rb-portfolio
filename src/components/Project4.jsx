import React from "react";
import resume from "../resources/resume.pdf";
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
          href="http://iedb-deploy.s3-website-us-east-1.amazonaws.com/"
          target="_blank"
        >
          Project 4
        </a>
      </div>
      <iframe
        className="project-window project4"
        src="http://iedb-deploy.s3-website-us-east-1.amazonaws.com/"
      ></iframe>
    </Rnd>
  );
};

export default Project4;
