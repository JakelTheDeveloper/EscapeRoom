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
        if (this.props.hours >= 0 && this.props.hours < 10) {
            zeroHourData = '0'
        }
        if (this.props.minutes >= 0 && this.props.minutes < 10) {
            zeroMinData = '0'
        }
        if (this.props.seconds >= 0 && this.props.seconds < 10) {
            zeroSecData = '0'
        }
        return (<div>
            <div className = "user" onClick={this.props.handleClick}>
                {this.props.user} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {zeroHourData}{this.props.hours}
                :{zeroMinData}{this.props.minutes}
                :{zeroSecData}{this.props.seconds}
            </div>
            {/*  */}
        </div>

        )
    }
}
export default HighScoreItem