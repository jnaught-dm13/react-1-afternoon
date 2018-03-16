import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: ""
    };
  }
  handleChange(value) {
    this.setState({ userInput: value });
  }
  handleOnClick(input) {
    let forward = this.state.userInput;
    let reverse = this.state.userInput
      .split("")
      .reverse("")
      .join("");

    if (forward === reverse) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Palindrome </h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.handleOnClick(this.state.userInput);
          }}
        >
          Check
        </button>
        <span className="resultsBox">{this.state.palindrome}</span>
      </div>
    );
  }
}
