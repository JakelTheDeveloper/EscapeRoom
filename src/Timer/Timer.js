import React, { Component } from 'react' 

class Timer extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        let zeroHourData
        let zeroMinData
        let zeroSecData
        if(this.props.hours >=0 && this.props.hours <10){
            zeroHourData = '0'
       }
        if(this.props.minutes >=0 && this.props.minutes <10){
             zeroMinData = '0'
        }
        if(this.props.seconds >=0 && this.props.seconds <10){
             zeroSecData = '0'
        }
        return (
            <div>
            <div style={{position: 'absolute',top: 440,left: canvLeft + 480,color:'red',borderStyle:'solid',borderRadius:5,backgroundColor:'black'}}>
                  {zeroHourData}{this.props.hours}:{zeroMinData}{this.props.minutes}:{zeroSecData}{this.props.seconds}
            </div>
            <button className = "menuBtnSmall" onClick = {this.props.handleMute} style={{position: 'absolute',top: 440,left: canvLeft + 550}}>Mute</button>
            </div>
        );
    }
}

export default Timer