import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import "./app.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      color: "red"
    };
  }

  handleIncrement = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <span onClick={this.handleDecrement}>Decrement</span>
        <span onClick={this.handleIncrement}>Increment</span>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
