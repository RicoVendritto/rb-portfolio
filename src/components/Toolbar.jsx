import React from "react";

// Custom Components
import Clock from "./Clock";

// Fontawesome Imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const home = <FontAwesomeIcon icon={faHome} />;

const Toolbar = props => {
  return (
    <div className="toolbar">
      <button className="start-btn" name="menu" onClick={e => props.onClick(e)}>
        <i className="faHome">{home}</i>
        <p className="start-txt">Start</p>
      </button>
      <div className="clock"><Clock /></div>
    </div>
  );
};

export default Toolbar;
