import React, { Component } from 'react'

class CrowBar extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.crowBar}
                onClick={this.props.handleClick}
                id='crowBar'
                name='crowBar'
                style={{ position: 'absolute', top: 285, left: canvLeft + 580 }}
                alt='crowBar'
            />
        )
    }
}
export default CrowBar