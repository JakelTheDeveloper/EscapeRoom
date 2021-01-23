import React, { Component } from 'react'
import soundSFX from '../../soundFileHelper/SoundFile'
class HighScoreItem extends Component {
    handlePlay = () => {
        soundSFX.selectionSFX.play()
    }
    render() {
        let zeroHourData
        let zeroMinData
        let zeroSecData
        if (this.props.time.h >= 0 && this.props.time.h < 10) {
            zeroHourData = '0'
        }
        if (this.props.time.m >= 0 && this.props.time.m < 10) {
            zeroMinData = '0'
        }
        if (this.props.time.s >= 0 && this.props.time.s < 10) {
            zeroSecData = '0'
        }
        return (<div>
            <div className = "user" onClick={this.props.handleClick}>
                {this.props.user} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {zeroHourData}{this.props.time.h}
                :{zeroMinData}{this.props.time.m}
                :{zeroSecData}{this.props.time.s}
            </div>
        </div>

        )
    }
}
export default HighScoreItem