// Code DigitalClicker Component Here


import React, { Component } from 'react';


// made the contructor that set the original state 
// made a button that handled the click event and called handleClick which updated the state of the count. 
export class DigitalClicker extends Component {
    constructor() {
    super();
    this.state = {
        timesClicked: 0
    };
}

handleClick() {
    this.setState({
        timesClicked: this.state.timesClicked + 1
    })
}
    render() {
        return (
            <button className="clicker" onClick={() => this.handleClick()}>
                {this.state.timesClicked}
            </button>
        );
    }
}

export default DigitalClicker;

