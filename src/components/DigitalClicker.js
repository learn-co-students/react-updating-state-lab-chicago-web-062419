// Import React Component
import React, { Component } from "react";

// Inherits from Component
class DigitalClicker extends Component {
  // def initialize
  constructor() {
    // Inherits from Component
    super();
    // Sets initial state
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    // Changes the state
    this.setState(previousState => ({
      timesClicked: previousState.timesClicked + 1
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
