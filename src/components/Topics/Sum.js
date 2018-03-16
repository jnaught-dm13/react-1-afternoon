import React, { Component } from "react";

export default class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }
  firstNum(value) {
    this.setState({ number1: parseInt(value) });
  }
  secondNum(value) {
    this.setState({ number2: parseInt(value) });
  }
  total(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input
          className="inputLine"
          type="number"
          onChange={event => this.firstNum(event.target.value)}
        />
        <input
          className="inputLine"
          type="number"
          onChange={event => this.secondNum(event.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.total(this.state.number1, this.state.number2)}
        >
          Get Results
        </button>
        <span className="resultsBox">Result: {this.state.sum} </span>
      </div>
    );
  }
}
