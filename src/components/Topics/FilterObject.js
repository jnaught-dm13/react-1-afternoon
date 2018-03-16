import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        {
          name: "Jeremy",
          age: 23,
          hobby: "stamp collecting"
        },
        {
          name: "Shivra",
          age: 33,
          quote: "I'll eat your soul?"
        },
        {
          name: "Aiden",
          age: 65,
          favFood: "apple sauce"
        },
        {
          name: "Chantelle",
          age: 23,
          favColor: "Money Green"
        }
      ],

      userInput: "",

      filteredArray: []
    };
  }
  handleChange(value) {
    this.setState({ userInput: value });
    console.log(this.state.userInput);
  }
  filterObject(input) {
    let newArray = this.state.unFilteredArray;
    let userFilter = [];
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].hasOwnProperty(input)) {
        userFilter.push(newArray[i]);
      }
    }
    this.setState({ filteredArray: userFilter });
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          unFiltered Object{JSON.stringify(
            this.state.unFilteredArray,
            null,
            10
          )}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />

        <button
          className="confirmationButton"
          onClick={() => this.filterObject(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered:{JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
