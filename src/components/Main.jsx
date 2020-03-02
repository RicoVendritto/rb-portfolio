import React from "react";

// Custom Resources
import internet from "../resources/internet.ico";
import skills from "../resources/skills.ico";

const Main = props => {
  return (
    <main className="main-desktop">
      <div className="main-internet">
        <img src={internet} name="internet" onClick={e => props.onClick(e)} />
        <p>Internet Explorer</p>
      </div>
      <div className="main-skills">
        <img src={skills} name="skills" onClick={e => props.onClick(e)} />
        <p>Skills</p>
      </div>
    </main>
  );
};

export default Main;
