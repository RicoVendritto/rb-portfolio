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
    console.log("time check");
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours}:${minutes}`;
    console.log(time);
    this.setState({
      time
    });
  };

  render() {
    return <p>{this.state.time}</p>;
  }
}

export default Clock;
