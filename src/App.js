import React, { Component } from "react";
import "./App.scss";

// Custom Components
import Toolbar from "./components/Toolbar";
import Menu from "./components/Menu";
import Main from "./components/Main";
import GitHubWidget from "./components/GitHubWidget";

// Window Components
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import GitHub from "./components/GitHub";
import Project from "./components/Project2";
import Resume from "./components/Resume";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Project5 from "./components/Project5";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: true,
      aboutme: false,
      contact: false,
      project: false,
      github: false,
      resume: false,
      project1: false,
      project2: false,
      project3: false,
      project4: false,
      project5: false
    };
  }

  componentDidMount = () => {
    const window = document.querySelector(".main-desktop");
    window.addEventListener("click", this.closeStart);
  };

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

  render() {
    return (
      <div className="App">
        <Main />
        <Toolbar onClick={this.onClick} />
        {this.state.menu && (
          <Menu onClick={this.onClick} closeStart={this.closeStart} />
        )}
        {this.state.contact && <Contact onClick={this.onClick} />}
        {this.state.github && <GitHub onClick={this.onClick} />}
        {this.state.project && <Project onClick={this.onClick} />}
        {this.state.resume && <Resume onClick={this.onClick} />}
        {this.state.aboutme && <AboutMe onClick={this.onClick} />}
        {this.state.project1 && <Project1 onClick={this.onClick} />}
        {this.state.project2 && <Project2 onClick={this.onClick} />}
        {this.state.project3 && <Project3 onClick={this.onClick} />}
        {this.state.project4 && <Project4 onClick={this.onClick} />}
        {this.state.project5 && <Project5 onClick={this.onClick} />}
        <GitHubWidget />
      </div>
    );
  }
}

export default App;
