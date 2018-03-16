import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      fruit: [
        "Apple ",
        "Banana ",
        "Cherry ",
        "Date ",
        "Elderberry ",
        "Fig ",
        "Grape ",
        "Honeyberry ",
        "Jackfruit ",
        "Kiwifruit ",
        "Lemon "
      ],
      userInput: "",
      filteredArray: []
    };
  }
  handleChange(value) {
    this.setState({ userInput: value });
  }
  handleOnClick(userInput) {
    var fruit = this.state.fruit;
    var filteredFruit = [];
    for (var i = 0; i < fruit.length; i++) {
      if (fruit[i].includes(userInput)) {
        filteredFruit.push(fruit[i]);
      }
    }

    this.setState({ filteredArray: filteredFruit });
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{this.state.unFilteredArray}</span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.handleOnClick(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered: {this.state.filteredArray}
        </span>
      </div>
    );
  }
}
