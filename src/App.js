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
import Project from "./components/Project";
import Resume from "./components/Resume";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: true,
      aboutme: false,
      contact: false,
      project: false,
      github: true,
      resume: false
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
        <GitHubWidget />
      </div>
    );
  }
}

export default App;
