import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    // Khởi tạo state
    this.state = {
      value: '?????'
    };
  }
  handleClick = () => {
    this.setState({
      value: 'He'
    });
  };
  shouldComponentUpdate(_nextProps: unknown, nextState: { value: unknown; }) {
    return nextState.value !== this.state.value;
  }

  render() {
    return (
      <div>
        <p>Value: {this.state.value}</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default MyComponent;
