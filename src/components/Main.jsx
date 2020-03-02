import React from "react";

// Custom Resources

import internet from "../resources/internet.ico";
import skills from "../resources/skills.ico";

const Main = props => {
  return (
    <main className="main-desktop">
      <div className="main-internet" onClick={e => props.onClick(e)}>
        <img src={internet} />
        <p>Internet Explorer</p>
      </div>
      <div className="main-skills" onClick={e => props.onClick(e)}>
        <img src={skills} />
        <p>Skills</p>
      </div>
    </main>
  );
};

export default Main;
