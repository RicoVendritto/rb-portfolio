import React, { Component } from "react";

// Custom Components
import ProjectsMenu from "./ProjectsMenu";

// Custom Resources
import arrow from "../resources/arrow.png";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectmenu: false
    };
  }

  showProjects = e => {
    e.preventDefault();
    if (this.state.projectmenu) {
      this.setState({
        projectmenu: false
      });
    } else {
      this.setState({
        projectmenu: true
      });
    }
  };

  render() {
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
              this.props.onClick(e);
              this.props.closeStart(e);
            }}
          >
            About Me
          </button>
          <button
            className="start-btn"
            name="contact"
            onClick={e => {
              this.props.onClick(e);
              this.props.closeStart(e);
            }}
          >
            Contact
          </button>
          <div
            className="start-btn projects"
            name="projects"
            onClick={e => {
              this.showProjects(e);
            }}
          >
            <span>Projects</span>
            <img className="menu-arrow" src={arrow} />
            {this.state.projectmenu && (
              <ProjectsMenu
                onClick={this.props.onClick}
                closeStart={this.props.closeStart}
              />
            )}
          </div>
          <button
            className="start-btn"
            name="github"
            onClick={e => {
              this.props.onClick(e);
              this.props.closeStart(e);
            }}
          >
            GitHub
          </button>
          <button
            className="start-btn"
            name="resume"
            onClick={e => {
              this.props.onClick(e);
              this.props.closeStart(e);
            }}
          >
            Resume
          </button>
        </div>
      </div>
    );
  }
}

export default Menu;
