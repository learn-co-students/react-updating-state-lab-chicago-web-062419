// Code YouTubeDebugger Component Here

import React, { Component } from 'react';

class componentName extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    handleClick = () => {
        this.setState({
           settings: {
               ...this.state.settings, 
               bitrate: 12
           }
        });
        console.log(this.state.settings.bitrate)
    };

  

    handleResolutionClick = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            video: {
              ...this.state.settings.video,
              resolution: '720p'
            }
        }
    });
    console.log(this.state.settings.video)
}
    
    render() {
        return (
            <div>
            <button className='bitrate' onClick={this.handleClick}>
                Change Bitrate
            </button>
            <button className='resolution' onClick={this.handleResolutionClick}>
                Change Resolution
            </button>
            </div>
        );
    }
}

export default componentName;
