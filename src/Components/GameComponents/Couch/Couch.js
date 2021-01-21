import React, { Component } from 'react'

class Couch extends Component {
    constructor(props) {
        super(props)
        this.couch = React.createRef();
    }
    returnData = () => {
        let couch = this.couch.current
        let myData = {
            width: couch.clientWidth,
            height: couch.clientHeight,
            left: parseInt(couch.style.left),
            top: parseInt(couch.style.top)
        }
        return myData
    }
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.currCouch}
                onClick={this.props.handleClick}
                ref={this.couch}
                id='couch'
                name='couch'
                style={{ position: 'absolute', top: 305, left: canvLeft + 95 }}
                alt='couch'
            />
        )
    }
}
export default Couch