import React, { Component } from 'react'

class Instructions extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.bg}
            onClick = {this.props.handleClick}
                style={{ position: 'absolute', left: canvLeft, top: 50, width: 640, height: 425 }}
                alt="Instructions"
            />
        )
    }
}
export default Instructions