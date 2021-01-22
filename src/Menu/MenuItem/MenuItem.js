import React, { Component } from 'react'

class MenuItem extends Component {

    render() {
        let canvLeft = this.props.canvLeft
        return (
            <div className = "menuItem" onMouseOver = {this.props.handlePlay} onClick = {this.props.handleClick}
            style={{top: this.props.top,left: canvLeft + this.props.left}}
            >{this.props.item}</div>
        )
    }
}
export default MenuItem