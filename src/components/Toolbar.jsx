import React from "react";

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
      <div className="clock">00:00</div>
    </div>
  );
};

export default Toolbar;
