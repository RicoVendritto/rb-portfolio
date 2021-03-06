import React, { Component } from "react";
import "./App.scss";

// Custom Components
import Toolbar from "./components/Toolbar";
import Menu from "./components/Menu";
import Main from "./components/Main";

// Window Components
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import GitHub from "./components/GitHub";
import Resume from "./components/Resume";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Project5 from "./components/Project5";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Internet from "./components/Internet";
import Intro from "./components/Intro";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      aboutme: false,
      contact: false,
      github: true,
      resume: false,
      project1: false,
      project2: false,
      project3: false,
      project4: false,
      project5: false,
      overview: false,
      skills: false,
      internet: false,
      intro: true
    };
  }

  closeStart = e => {
    if (e) {
      e.preventDefault();
    }
    if (this.state.menu) {
      this.setState({
        menu: false
      });
    }
  };

  onClick = e => {
    const name = e.target.name;
    e.preventDefault();
    if (this.state[name]) {
      this.setState({
        [name]: false
      });
    } else {
      this.setState({
        [name]: true
      });
    }
  };

  handleSizeMax = e => {
    e.preventDefault();
    const name = e.target.name;
    const element = document.querySelector(`.${name}`);
    element.style.height = "100%";
    element.style.width = "100%";
    element.style.transform = "translate(0, 0)";
  };

  handleSizeMin = e => {
    e.preventDefault();
    const name = e.target.name;
    const element = document.querySelector(`.${name}`);
    element.style.height = "10%";
    element.style.width = "10%";
    element.style.transform = "translate(100, 100)";
  };

  render() {
    return (
      <div className="App">
        <Main onClick={this.onClick} />
        <Toolbar onClick={this.onClick} />
        {this.state.menu && (
          <Menu onClick={this.onClick} closeStart={this.closeStart} />
        )}
        {this.state.contact && (
          <Contact
            onClick={this.onClick}
            handleSizeMax={this.handleSizeMax}
            handleSizeMin={this.handleSizeMin}
          />
        )}
        {this.state.github && (
          <GitHub
            onClick={this.onClick}
            handleSizeMax={this.handleSizeMax}
            handleSizeMin={this.handleSizeMin}
          />
        )}
        {this.state.resume && (
          <Resume
            onClick={this.onClick}
            handleSizeMax={this.handleSizeMax}
            handleSizeMin={this.handleSizeMin}
          />
        )}
        {this.state.aboutme && (
          <AboutMe
            onClick={this.onClick}
            handleSizeMax={this.handleSizeMax}
            handleSizeMin={this.handleSizeMin}
          />
        )}
        {this.state.project1 && (
          <Project1
            onClick={this.onClick}
            handleSizeMax={this.handleSizeMax}
            handleSizeMin={this.handleSizeMin}
          />
        )}
        {this.state.project2 && (
          <Project2
            onClick={this.onClick}
            handleSizeMax={this.handleSizeMax}
            handleSizeMin={this.handleSizeMin}
          />
        )}
        {this.state.project3 && (
          <Project3
            onClick={this.onClick}
            handleSizeMax={this.handleSizeMax}
            handleSizeMin={this.handleSizeMin}
          />
        )}
        {this.state.project4 && (
          <Project4
            onClick={this.onClick}
            handleSizeMax={this.handleSizeMax}
            handleSizeMin={this.handleSizeMin}
          />
        )}
        {this.state.project5 && (
          <Project5
            onClick={this.onClick}
            handleSizeMax={this.handleSizeMax}
            handleSizeMin={this.handleSizeMin}
          />
        )}
        {this.state.overview && (
          <Overview
            onClick={this.onClick}
            handleSizeMax={this.handleSizeMax}
            handleSizeMin={this.handleSizeMin}
          />
        )}
        {this.state.skills && (
          <Skills
            onClick={this.onClick}
            handleSizeMax={this.handleSizeMax}
            handleSizeMin={this.handleSizeMin}
          />
        )}
        {this.state.internet && (
          <Internet
            onClick={this.onClick}
            handleSizeMax={this.handleSizeMax}
            handleSizeMin={this.handleSizeMin}
          />
        )}
        {this.state.intro && (
          <Intro
            onClick={this.onClick}
            handleSizeMax={this.handleSizeMax}
            handleSizeMin={this.handleSizeMin}
          />
        )}
      </div>
    );
  }
}

export default App;
