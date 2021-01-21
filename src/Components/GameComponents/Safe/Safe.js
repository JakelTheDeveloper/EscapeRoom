import React, { Component } from 'react'

class Safe extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.safe}
                onClick={this.props.handleClick}
                id='safe'
                name='safe'
                style={{ position: 'absolute', top: 250, left: canvLeft + 570 }}
                alt='safe'
            />
        )
    }
}
export default Safe