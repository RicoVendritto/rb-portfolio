import React from "react";

const Menu = props => {
  return (
    <div className="start-menu">
      <div className="side-filler">
        <div className="start-text">
          <p>Richard</p>
          <p>Braamburg</p>
        </div>
      </div>
      <div className="menu-column">
        <button
          className="start-btn"
          name="aboutme"
          onClick={e => {
            props.onClick(e);
            props.closeStart(e);
          }}
        >
          About Me
        </button>
        <button
          className="start-btn"
          name="contact"
          onClick={e => {
            props.onClick(e);
            props.closeStart(e);
          }}
        >
          Contact
        </button>
        <button
          className="start-btn"
          name="project"
          onClick={e => {
            props.onClick(e);
            props.closeStart(e);
          }}
        >
          Project
        </button>
        <button
          className="start-btn"
          name="github"
          onClick={e => {
            props.onClick(e);
            props.closeStart(e);
          }}
        >
          GitHub
        </button>
        <button
          className="start-btn"
          name="resume"
          onClick={e => {
            props.onClick(e);
            props.closeStart(e);
          }}
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Menu;
