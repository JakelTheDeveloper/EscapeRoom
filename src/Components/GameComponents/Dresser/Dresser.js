import React, { Component } from 'react'

class Dresser extends Component {
    constructor(props) {
        super(props)
        this.dresser = React.createRef();
    }
    returnData = () => {
        let dresser = this.dresser.current
        let myData = {
            width: dresser.clientWidth,
            height: dresser.clientHeight,
            left: parseInt(dresser.style.left),
            top: parseInt(dresser.style.top)
        }
        return myData
    }
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.currDresser}
                ref={this.dresser}
                onClick={this.props.handleClick}
                id='dresser'
                name='dresser'
                style={{position: 'absolute',top: 90,left: canvLeft + 470}}
                alt='dresser'
            />
        )
    }
}
export default Dresser