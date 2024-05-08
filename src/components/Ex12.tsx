import React, { Component } from 'react';

class ColorForm extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      color: ''
    };
  }
  handleChange = (event: { target: { value: unknown; }; }) => {
    this.setState({ color: event.target.value });
  };

  handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    alert('Mã màu sắc: ' + this.state.color);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="color"
          value={this.state.color}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ColorForm;
