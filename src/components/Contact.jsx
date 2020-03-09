import React, { Component } from "react";
import { Rnd } from "react-rnd";

// Custom Components
import ContactForm from "./ContactForm";

// Custom Resources
import contactme from "../resources/contactme.ico";
import exit from "../resources/exit.png";
import max from "../resources/max.png";

const Contact = props => {
  return (
    <Rnd
      style={{ zIndex: 1 }}
      className="resume-window"
      default={{
        x: 250,
        y: 200,
        width: 320,
        height: 260
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={contactme} />
        <img
          className="option-max"
          name="intro-window"
          onClick={e => props.handleSize(e)}
          src={max}
        />
        <img
          className="option-close"
          name="contact"
          onClick={e => props.onClick(e)}
          src={exit}
        />
      </div>
      <div className="sub-option-bar">
        <a
          className="resume-download"
          href="mailto:richard.braamburg@gmail.com"
        >
          Contact
        </a>
      </div>
      <section>
        <ContactForm />
      </section>
    </Rnd>
  );
};

export default Contact;
