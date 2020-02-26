import React from "react";
import internet from "../resources/internet.ico";

const Main = () => {
  return (
    <main className="main-desktop">
      <div className="main-internet">
        <img src={internet} />
        <p>Internet Explorer</p>
      </div>
      <div id="github-card" data-username="RicoVendritto"></div>
    </main>
  );
};

export default Main;
