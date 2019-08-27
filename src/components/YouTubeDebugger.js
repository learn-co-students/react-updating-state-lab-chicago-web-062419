// Import React Component
import React, { Component } from "react";

// Inherits from Component
class YouTubeDebugger extends Component {
  // def initialize
  constructor() {
    // Inherits from Component
    super();
    // Sets initial state
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  handleChangeBitrate = () => {
    // Changes the state
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleChangeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleChangeBitrate}>
          Change bitrate
        </button>
        <button className="resolution" onClick={this.handleChangeResolution}>
          Change resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
