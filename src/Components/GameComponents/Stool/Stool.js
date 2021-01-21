import React, { Component } from 'react'

class Stool extends Component {
    constructor(props) {
        super(props)
        this.stool = React.createRef();
    }
    returnData = () => {
        let stool = this.stool.current
        let myData = {
            width: stool.clientWidth,
            height: stool.clientHeight,
            left: parseInt(stool.style.left),
            top: parseInt(stool.style.top)
        }
        return myData
    }
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.currStool}
                ref={this.stool}
                onClick={this.props.handleClick}
                id='stool'
                name='stool'
                style={{position: 'absolute',top: 250,left: canvLeft + 110}}
                alt='stool'
            />
        )
    }
}
export default Stool