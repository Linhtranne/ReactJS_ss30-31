import React, { Component } from 'react';

class Counter extends Component {
  intervalID!: number;
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState(prevState => ({
        count: (prevState.count + 1) % 11
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default Counter;
