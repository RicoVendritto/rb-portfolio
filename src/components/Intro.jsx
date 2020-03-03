import React from "react";
import { Rnd } from "react-rnd";

// Custom Resources
import welcome from "../resources/welcome.ico";
import exit from "../resources/exit.png";

const Intro = props => {
  return (
    <Rnd
      style={{ zIndex: 0 }}
      id="error-message"
      className="resume-window"
      default={{
        x: 80,
        y: 15,
        width: "90%",
        height: "90%"
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={welcome} />
        <img
          className="option-close"
          name="intro"
          onClick={e => props.onClick(e)}
          src={exit}
        />
      </div>
      <section className="intro-window">
        <div>
          <h6>Richard's Portfolio</h6>
          <div className="text">
            <p>
              This Portfolio has <span>not</span> stopped responding to the
              system
            </p>
            <p>&#8226; To start, click on start in the lower-left corner</p>
            <p>
              &#8226; This window, and all other windows, can be closed by clicking the 'X' in the
              right-upper corner
            </p>
          </div>
        </div>
      </section>
    </Rnd>
  );
};

export default Intro;
