import React from "react";
import { Rnd } from "react-rnd";

// Custom Resources
import welcome from "../resources/welcome.ico";
import exit from "../resources/exit.png";
import max from "../resources/max.png";

const Intro = props => {
  return (
    <Rnd
      style={{ zIndex: 10 }}
      id="error-message"
      className="intro-window"
      default={{
        x: 80,
        y: 15,
        width: "90%",
        height: "90%"
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={welcome} alt="welcome sign" />
        <img
          className="option-max"
          name="intro-window"
          onClick={e => props.handleSize(e)}
          src={max}
          alt="max window"
        />
        <img
          className="option-close"
          name="intro"
          onClick={e => props.onClick(e)}
          src={exit}
          alt="close window"
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
              &#8226; This window can be closed by clicking the 'X' in the
              right-upper corner
            </p>
            <p>
              &#8226; To see the source code of this portfolio, please visit{" "}
              <span>
                <a
                  href="https://github.com/RicoVendritto/rb-portfolio"
                  target="_blank noopener"
                >
                  my GitHub
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </Rnd>
  );
};

export default Intro;
