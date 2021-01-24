import React, { Component } from 'react'

class Lamp extends Component {
    constructor(props) {
        super(props)
        this.lamp = React.createRef()
    }
    returnData = () => {
        let lamp = this.lamp.current
        let myData = {
            width: lamp.clientWidth,
            height: lamp.clientHeight,
            left: parseInt(lamp.style.left),
            top: parseInt(lamp.style.top)
        }
        return myData
    }
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.currLamp}
            ref={this.lamp}
                onClick={this.props.handleClick}
                id='lamp'
                name='lamp'
                style={{position: 'absolute',top: 75, left: canvLeft + 160}}
                alt='lamp'
            />
        )
    }
}
export default Lamp