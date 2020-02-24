import React, { Component } from "react";
import "./App.scss";

// Custom Components
import Toolbar from "./components/Toolbar";
import Menu from "./components/Menu";

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
      menu: false
    };
  }

  onClick = e => {
    e.preventDefault();
    if (this.state.menu) {
      this.setState({
        menu: false
      });
    } else {
      this.setState({
        menu: true
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Toolbar onClick={this.onClick} />
        {this.state.menu && <Menu />}
        <Contact />
        <GitHub />
        <Project />
        <Resume />
        <AboutMe />
      </div>
    );
  }
}

export default App;
