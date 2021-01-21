import React, { Component } from 'react'

class Papers extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.papers}
                onClick={this.props.handleClick}
                id='papers'
                name='papers'
                style={{ position: 'absolute', top: 355, left: canvLeft + 480 }}
                alt='papers'
            />
        )
    }
}
export default Papers