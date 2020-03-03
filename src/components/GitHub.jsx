import React from "react";
import { Rnd } from "react-rnd";
import github from "../resources/github.ico";
import exit from "../resources/exit.png";

// Custom Components
import GitHubWidget from "./GitHubWidget";

const GitHub = props => {
  return (
    <Rnd
      style={{ zIndex: 1 }}
      className="resume-window"
      default={{
        x: 100,
        y: 100,
        width: 375,
        height: 460
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={github} />
        <img
          className="option-close"
          name="github"
          onClick={e => props.onClick(e)}
          src={exit}
        />
      </div>
      <div className="sub-option-bar">
        <a
          className="resume-download"
          href="https://github.com/RicoVendritto"
          target="_blank"
        >
          GitHub
        </a>
      </div>
      <div className="resume-frame">
        <GitHubWidget />
      </div>
      <iframe className="resume-iframe-script">
        <div id="github-card" data-username="RicoVendritto"></div>
        <script src="https://npmcdn.com/github-card@1.2.0/dist/widget.js"></script>
      </iframe>
    </Rnd>
  );
};

export default GitHub;
