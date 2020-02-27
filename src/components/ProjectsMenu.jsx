import React from "react";

const ProjectsMenu = props => {
  return (
    <div className="project-menu">
      <button
        className="project-btn"
        onClick={e => {
          props.closeStart(e);
        }}
      >
        Project 1
      </button>
      <button
        className="project-btn"
        onClick={e => {
          props.closeStart(e);
        }}
      >
        Project 2
      </button>
      <button
        className="project-btn"
        onClick={e => {
          props.closeStart(e);
        }}
      >
        Project 3
      </button>
      <button
        className="project-btn"
        onClick={e => {
          props.closeStart(e);
        }}
      >
        Project 4
      </button>
      <button
        className="project-btn"
        onClick={e => {
          props.closeStart(e);
        }}
      >
        Project 5
      </button>
    </div>
  );
};

export default ProjectsMenu;
