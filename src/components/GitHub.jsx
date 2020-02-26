import React, { Component } from "react";
import { Rnd } from "react-rnd";
import notepad from "../resources/notepad.ico";
import exit from "../resources/exit.png";

// Custom Components
import GitHubWidget from "./GitHubWidget";

const GitHub = props => {
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
        <a>GITHUB</a>
      </div>
      <div className="resume-frame">
        <GitHubWidget />
      </div>
    </Rnd>
  );
};

export default GitHub;
