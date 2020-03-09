import React from "react";

// Custom Resources
import internet from "../resources/internet.ico";
import skills from "../resources/skills.ico";

// Custom Component
import Logo from "./Overview";

const Main = props => {
  return (
    <main className="main-desktop">
      <div className="main-internet">
        <img
          src={internet}
          name="internet"
          onClick={e => props.onClick(e)}
          alt="internet"
        />
        <p>Internet Explorer</p>
      </div>
      <div className="main-skills">
        <img
          src={skills}
          name="skills"
          onClick={e => props.onClick(e)}
          alt="skills"
        />
        <p>Skills</p>
      </div>
      <Logo />
    </main>
  );
};

export default Main;
