import React, { Component } from 'react';

class BirthdayForm extends Component {
  constructor(props: {}) {
    super(props);
    // Khởi tạo state để lưu trữ giá trị ngày sinh nhập từ người dùng
    this.state = {
      birthday: ''
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange = (event: { target: { value: any; }; }) => {
    this.setState({ birthday: event.target.value });
  };
  handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    alert('Ngày sinh: ' + this.state.birthday);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="date"
          value={this.state.birthday}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default BirthdayForm;
