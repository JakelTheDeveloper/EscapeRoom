import React, { Component } from 'react'

class HitBox2 extends Component {
    constructor(props) {
        super(props)
        this.hitBox2 = React.createRef()
    }
    returnData = () => {
        let hitBox2 = this.hitBox2.current
        let myData = {
            width: hitBox2.clientWidth,
            height: hitBox2.clientHeight,
            left: parseInt(hitBox2.style.left),
            top: parseInt(hitBox2.style.top)
        }
        return myData
    }
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.hitBox}
                ref={this.hitBox2}
                id='hitBox2'
                name='hitBox2'
                style={{ position: 'absolute', top: 122, left: canvLeft + 420 }}
                alt='hitBox2'
            />
        )
    }
}
export default HitBox2