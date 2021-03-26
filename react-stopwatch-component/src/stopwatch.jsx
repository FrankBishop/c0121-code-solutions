import React from 'react';

class Stopwatch extends React.Component {

  constructor(props) {
    super(props);
    this.state = { timer: 0, isRunning: false };
    this.handleClick = this.handleClick.bind(this);
    this.resetTime = this.resetTime.bind(this);
  }

  render() {
    if (this.state.isRunning === true) {
      return <div className="circle">
        <h1 onClick={this.resetTime}>{this.state.timer}</h1>
        <i className="fas fa-pause icon" onClick={this.handleClick}></i>
      </div>;
    }
    return <div className="circle">
      <h1 onClick={this.resetTime}>{this.state.timer}</h1>
      <i className="fas fa-play icon" onClick={this.handleClick}></i>
    </div>;
  }

  startTime() {
    this.timer = setInterval(
      () => this.setState({ timer: this.state.timer + 1 }),
      1000);
  }

  stopTime() {
    clearInterval(this.timer);
  }

  handleClick() {
    if (this.state.isRunning === false) {
      this.setState({ isRunning: true });
      this.startTime();
    } else {
      this.setState({ isRunning: false });
      this.stopTime();
    }
  };

  resetTime() {
    if (this.state.isRunning === false) {
      this.setState({ timer: 0 });
    }
  }
}

export default Stopwatch;
