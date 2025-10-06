import React, { Component } from "react";
import resume from "../resources/resume.pdf";
import { Rnd } from "react-rnd";
import notepad from "../resources/notepad.ico";
import exit from "../resources/exit.png";
import max from "../resources/max.png";
import min from "../resources/min.png";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Rnd
        style={{ zIndex: 1 }}
        className="resume-window rnd-window"
        default={{
          x: 100,
          y: 100,
          width: 550,
          height: 800,
        }}
      >
        <div className="option-bar">
          <img className="option-type" src={notepad} alt="resume" />
          <img
            className="option-min"
            name="resume-window"
            onClick={(e) => this.props.handleSizeMin(e)}
            src={min}
            alt="min window"
          />
          <img
            className="option-max"
            name="resume-window"
            onClick={(e) => this.props.handleSizeMax(e)}
            src={max}
            alt="max window"
          />
          <img
            className="option-close"
            name="resume"
            onClick={(e) => this.props.onClick(e)}
            src={exit}
            alt="exit window"
          />
        </div>
        <div className="sub-option-bar">
          <a className="resume-download" href={resume} download={resume}>
            Download
          </a>
        </div>
        <iframe title="resume" className="resume-frame" src={resume} />
      </Rnd>
    );
  }
}

export default Resume;
