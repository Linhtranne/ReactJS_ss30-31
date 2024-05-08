/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';

class ProgressForm extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      progress: 0
    };
  }

  handleChange = (event: { target: { value: any; }; }) => {
    this.setState({ progress: event.target.value });
  };

  handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    alert('Tiến độ hoàn thành: ' + this.state.progress);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="range"
          min="0"
          max="100"
          value={this.state.progress}
          onChange={this.handleChange}
        />
        <p>Progress: {this.state.progress}%</p>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ProgressForm;
