import React, { Component } from 'react';

class MyComponent extends Component {
  inputElement: any;
  componentDidMount() {
    this.inputElement.addEventListener('input', this.handleInputChange);
  }

  componentWillUnmount() {
    this.inputElement.removeEventListener('input', this.handleInputChange);
  }
  handleInputChange = (event) => {
    document.title = event.target.value || "Tiêu đề mặc định";
  };

  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.inputElement = input; }}
          placeholder="Thay đổi tiêu đề"
        />
        <p>Nội dung của component</p>
      </div>
    );
  }
}

export default MyComponent;
