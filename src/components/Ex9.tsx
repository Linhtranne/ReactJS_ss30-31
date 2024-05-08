import React, { Component } from 'react';

class Clock extends Component {
  timerID!: number;
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      currentTime: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div>
        <h2>Current Time:</h2>
        <p>{this.state.currentTime}</p>
      </div>
    );
  }
}

export default Clock;
