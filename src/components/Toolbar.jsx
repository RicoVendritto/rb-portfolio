import React, { Component } from "react";

// Custom Components
import Clock from "./Clock";

// Custom Resources
import soundon from "../resources/soundon.ico";
import soundoff from "../resources/soundoff.ico";
import internet1 from "../resources/internet1.ico";
import internet2 from "../resources/internet2.ico";
import internet3 from "../resources/internet3.ico";
import internet4 from "../resources/internet4.ico";

// Fontawesome Imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const home = <FontAwesomeIcon icon={faHome} />;

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soundIcon: soundon,
      internetIcon: internet1
    };
  }

  componentDidMount = () => {
    this.internetActivity();
  };

  internetActivity = () => {
    setInterval(this.changeInternetIcon, 500);
  };

  changeInternetIcon = () => {
    const icons = [internet1, internet2, internet3, internet4];
    const random = Math.floor(Math.random() * 4);
    this.setState({
      internetIcon: icons[random]
    });
  };

  handleClick = () => {
    if (this.state.soundIcon === soundon) {
      this.setState({
        soundIcon: soundoff
      });
    } else {
      this.setState({
        soundIcon: soundon
      });
    }
  };

  render() {
    return (
      <div className="toolbar">
        <button
          className="start-btn"
          name="menu"
          onClick={e => this.props.onClick(e)}
        >
          <i className="faHome">{home}</i>
          <p className="start-txt">Start</p>
        </button>
        <div className="clock">
          <img
            onClick={e => this.handleClick()}
            className="sound-icon"
            src={this.state.soundIcon}
            alt="sound icon"
          />
          <img
            className="internet-icon"
            src={this.state.internetIcon}
            alt="internet icon"
          />
          <Clock />
        </div>
      </div>
    );
  }
}

export default Toolbar;
