import React, { Component } from 'react'

class ToolBox extends Component {
    constructor(props) {
        super(props)
        this.toolBox = React.createRef();
    }
    returnData =()=> {
        let toolBox = this.toolBox.current
        let myData = {
            width:toolBox.clientWidth,
            height:toolBox.clientHeight,
            left:parseInt(toolBox.style.left),
            top:parseInt(toolBox.style.top)
        }
        return myData
    }
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.toolBox}
                onClick={this.props.handleClick}
                ref={this.toolBox}
                id='toolBox'
                name='toolBox'
                style={{position: 'absolute',top: 362,left: canvLeft + 325}}
                alt='toolBox'
            />
        )
    }
}
export default ToolBox