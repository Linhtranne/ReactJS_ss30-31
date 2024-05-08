import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    document.title = "Tiêu đề mới";
  }

  render() {
    return (
      <div>
        <p>Nội dung</p>
      </div>
    );
  }
}

export default MyComponent;
