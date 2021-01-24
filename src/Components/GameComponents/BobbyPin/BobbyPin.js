import React, { Component } from 'react'

class BobbyPin extends Component {
    constructor(props) {
        super(props)
        this.bobPin = React.createRef()
    }
    returnData = () => {
        let bobPin = this.bobPin.current
        let myData = {
            width: bobPin.clientWidth,
            height: bobPin.clientHeight,
            left: parseInt(bobPin.style.left),
            top: parseInt(bobPin.style.top)
        }
        return myData
    }
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.bobPin}
                ref={this.bobPin}
                onClick={this.props.handleClick}
                id='bobPin'
                name='bobPin'
                style={{position: 'absolute',top: 350,left: canvLeft + 440}}
                alt='bobPin'
            />
        )
    }
}
export default BobbyPin