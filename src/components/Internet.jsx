import React from "react";
import { Rnd } from "react-rnd";

// Custom Resources
import ieloader from "../resources/ieloader.ico";
import exit from "../resources/exit.png";
import max from "../resources/max.png";
import min from "../resources/min.png";

const Internet = props => {
  return (
    <Rnd
      style={{ zIndex: 1 }}
      className="internet-window rnd-window"
      default={{
        x: 0,
        y: 0,
        width: "100vw",
        height: "100vh"
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={ieloader} alt="ieloader" />
        <img
          className="option-min"
          name="internet-window"
          onClick={e => props.handleSizeMin(e)}
          src={min}
          alt="min window"
        />
        <img
          className="option-max"
          name="internet-window"
          onClick={e => props.handleSizeMax(e)}
          src={max}
          alt="max window"
        />
        <img
          className="option-close"
          name="internet"
          onClick={e => props.onClick(e)}
          src={exit}
          alt="exit window"
        />
      </div>
      <div className="sub-option-bar">
        <a className="resume-download" href="#">
          Internet Explorer
        </a>
      </div>
      <section className="internet-window">
        <iframe
          title="internet-frame"
          className="internet-frame"
          src="https://richardbraamburg.me/archive/pixart/index.html"
        ></iframe>
      </section>
    </Rnd>
  );
};

export default Internet;
