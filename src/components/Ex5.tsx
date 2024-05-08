import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    const { value } = this.props;

    return (
      <div>
        {value ? <p>Status: {value}</p> : <p>Không có giá trị được truyền vào props</p>}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propValue: 'Open the form'
    };
  }

  render() {
    return (
      <div>
        <MyComponent value={this.state.propValue} />

        <button onClick={() => this.setState({ propValue: 'Close the form' })}>
          Change props
        </button>
      </div>
    );
  }
}

export default App;
