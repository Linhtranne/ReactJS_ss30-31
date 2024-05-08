import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Hehehehe'
    };
  }
  handleClick = () => {
    this.setState({
      value: '???????'
    });
  };

  render() {
    return (
      <div>
        <p>Click {this.state.value}</p>
        <button onClick={this.handleClick}>Change State</button>
      </div>
    );
  }
}

export default MyComponent;
