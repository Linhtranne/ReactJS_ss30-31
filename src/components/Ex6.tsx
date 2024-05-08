import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propValue: this.props.propValue
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.propValue !== this.props.propValue;
  }
  componentDidUpdate(prevProps) {
    if (prevProps.propValue !== this.props.propValue) {
      this.setState({
        propValue: this.props.propValue
      });
    }
  }

  render() {
    return (
      <div>
        <p>Prop Value: {this.state.propValue}</p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propValue: '?????'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        propValue: 'he'
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        <MyComponent propValue={this.state.propValue} />
      </div>
    );
  }
}

export default App;
