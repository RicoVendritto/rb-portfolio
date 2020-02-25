import React, { Component } from "react";
import resume from "../resources/resume.pdf";
import { Rnd } from "react-rnd";
import notepad from "../resources/notepad.ico";
import exit from "../resources/exit.png";

const GitHub = (props) => {
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
        <img className="option-type" src={notepad} />
        <img
          className="option-close"
          name="github"
          onClick={e => props.onClick(e)}
          src={exit}
        />
      </div>
      <div className="sub-option-bar">
        <a className="resume-download" href={resume} download>
          Download
        </a>
      </div>
    </Rnd>
  );
};

export default GitHub;
