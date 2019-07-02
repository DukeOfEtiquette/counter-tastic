import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      color: 'red',
    };
  }

  handleIncrement = (e) => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = (e) => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className="counter">
        <h4 className="count">{this.state.counter}</h4>
        <span onClick={this.handleDecrement}>Decrement</span>
        <span onClick={this.handleIncrement}>Increment</span>
      </div>
    );
  }
}

export default Counter;
