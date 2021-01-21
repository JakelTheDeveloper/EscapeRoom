import React, { Component } from 'react'

class Glove extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.glove}
                onClick={this.props.handleClick}
                id='glove1'
                name='glove1'
                style={{ position: 'absolute', top: 230, left: canvLeft + 68 }}
                alt='glove1'
            />
        )
    }
}
export default Glove
