import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "00:00"
    };
  }

  componentDidMount = () => {
    this.renderClock();
    setInterval(this.renderClock, 10000);
  };

  renderClock = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = this.getMinutes(date);
    const time = `${hours}:${minutes}`;
    this.setState({
      time
    });
  };

  getMinutes = date => {
    if (date.getMinutes() < 10) {
      return `0${date.getMinutes()}`;
    } else {
      return date.getMinutes();
    }
  };

  render() {
    return <p>{this.state.time}</p>;
  }
}

export default Clock;
