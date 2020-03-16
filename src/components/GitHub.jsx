import React, { Suspense } from "react";
import { Rnd } from "react-rnd";
import github from "../resources/github.ico";
import exit from "../resources/exit.png";
import max from "../resources/max.png";
import min from "../resources/min.png";
import githublink from "../resources/github.png";

// Custom Components
import GitHubWidget from "./GitHubWidget";
// const GitHubWidget = React.lazy(() => import("./GitHubWidget"));

const GitHub = props => {
  return (
    <Rnd
      style={{ zIndex: 1 }}
      className="github-window rnd-window"
      default={{
        x: 10,
        y: 10,
        width: 375,
        height: 460
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={github} alt="version control" />
        <img
          className="option-min"
          name="github-window"
          onClick={e => props.handleSizeMin(e)}
          src={min}
          alt="min window"
        />
        <img
          className="option-max"
          name="github-window"
          onClick={e => props.handleSizeMax(e)}
          src={max}
          alt="max window"
        />
        <img
          className="option-close"
          name="github"
          onClick={e => props.onClick(e)}
          src={exit}
          alt="close window"
        />
      </div>
      <div className="sub-option-bar">
        <a
          className="resume-download"
          href="https://github.com/RicoVendritto"
          target="_blank noopener"
        >
          GitHub
        </a>
      </div>
      <div className="resume-frame">
        {/* <img className="githublink" src={githublink} alt="githublink" /> */}
        {/* <Suspense fallback={<img src={githublink} alt="github" />}> */}
        <GitHubWidget />
        {/* </Suspense> */}
      </div>
      {/* <iframe className="resume-iframe-script" title="resume-iframe">
        <div id="github-card" data-username="RicoVendritto"></div>
        <script src="https://npmcdn.com/github-card@1.2.0/dist/widget.js"></script>
      </iframe> */}
    </Rnd>
  );
};

export default GitHub;
