import React, { Component } from "react";
import { Rnd } from "react-rnd";

// Custom Resources
import ieloader from "../resources/ieloader.ico";
import exit from "../resources/exit.png";
import max from "../resources/max.png";

const Internet = props => {
  return (
    <Rnd
      style={{ zIndex: 1 }}
      className="resume-window"
      default={{
        x: 0,
        y: 0,
        width: "100vw",
        height: "100vh"
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={ieloader} />
        <img
          className="option-max"
          name="intro-window"
          onClick={e => props.handleSize(e)}
          src={max}
        />
        <img
          className="option-close"
          name="internet"
          onClick={e => props.onClick(e)}
          src={exit}
        />
      </div>
      <div className="sub-option-bar">
        <a className="resume-download" href="#">
          Internet Explorer
        </a>
      </div>
      <section className="internet-window">
        <iframe
          className="internet-frame"
          src="https://richardbraamburg.me/archive/pixart/index.html"
        ></iframe>
      </section>
    </Rnd>
  );
};

export default Internet;
