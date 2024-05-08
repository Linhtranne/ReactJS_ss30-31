import React, { Component } from 'react';

class Exercise01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Linhtrannne'
    };
  }

  render() {
    return (
      <div>
        <p>Username: {this.state.userName}</p>
      </div>
    );
  }
}

export default Exercise01;
