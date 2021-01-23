import React, { Component } from 'react'

class Banner extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.bg}
            className = "dropdown"
            onClick = {this.props.handleClick}
                style={{ position: 'absolute', left: canvLeft, top: 50, width: 640, height: 425 }}
                alt="react, html5, js, css3"
            />
        )
    }
}
export default Banner