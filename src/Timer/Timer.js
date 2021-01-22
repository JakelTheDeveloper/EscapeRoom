import React, { Component } from 'react' 

class Timer extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        let zeroHourData
        let zeroMinData
        let zeroSecData
        if(this.props.hour >=0 && this.props.hour <10){
            zeroHourData = '0'
       }
        if(this.props.minutes >=0 && this.props.minutes <10){
             zeroMinData = '0'
        }
        if(this.props.seconds >=0 && this.props.seconds <10){
             zeroSecData = '0'
        }
        return (
            <div style={{position: 'absolute',top: 445,left: canvLeft + 380,color:'red',borderStyle:'solid',borderRadius:5,backgroundColor:'black'}}>
                  {zeroHourData}{this.props.hour}:{zeroMinData}{this.props.minutes}:{zeroSecData}{this.props.seconds}
            </div>
        );
    }
}

export default Timer