import React, { Component } from 'react'

class HitBox extends Component {
    constructor(props) {
        super(props)
        this.hitBox = React.createRef()
    }
    returnData = () => {
        let hitBox = this.hitBox.current
        let myData = {
            width: hitBox.clientWidth,
            height: hitBox.clientHeight,
            left: parseInt(hitBox.style.left),
            top: parseInt(hitBox.style.top)
        }
        return myData
    }
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.hitBox}
                ref={this.hitBox}
                id='hitBox'
                name='hitBox'
                style={{ position: 'absolute', top: 250, left: canvLeft + 450 }}
                alt='hitBox'
            />
        )
    }
}
export default HitBox