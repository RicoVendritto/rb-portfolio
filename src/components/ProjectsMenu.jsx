import React from "react";

const ProjectsMenu = props => {
  return (
    <div className="project-menu">
      <button
        name="project1"
        className="project-btn"
        onClick={e => {
          props.onClick(e);
          props.closeStart(e);
        }}
      >
        Project 1
      </button>
      <button
        name="project2"
        className="project-btn"
        onClick={e => {
          props.onClick(e);
          props.closeStart(e);
        }}
      >
        Project 2
      </button>
      <button
        name="project3"
        className="project-btn"
        onClick={e => {
          props.onClick(e);
          props.closeStart(e);
        }}
      >
        Project 3
      </button>
      <button
        name="project4"
        className="project-btn"
        onClick={e => {
          props.onClick(e);
          props.closeStart(e);
        }}
      >
        Project 4
      </button>
      <button
        name="project5"
        className="project-btn"
        onClick={e => {
          props.onClick(e);
          props.closeStart(e);
        }}
      >
        Project 5
      </button>
    </div>
  );
};

export default ProjectsMenu;
