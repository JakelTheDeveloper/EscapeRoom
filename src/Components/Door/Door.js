import React, { Component } from 'react'

class Door extends Component {
    constructor(props) {
        super(props)
        this.door = React.createRef();
    }
    returnData = () => {
        let door = this.door.current
        let myData = {
            width: door.clientWidth,
            height: door.clientHeight,
            left: parseInt(door.style.left),
            top: parseInt(door.style.top)
        }
        return myData
    }
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.currDoor}
                ref={this.door}
                onClick={this.props.handleClick}
                id='door'
                name='door'
                style={{ position: 'absolute', top: 56, left: canvLeft + 270 }}
                alt='door'
            />
        )
    }
}
export default Door