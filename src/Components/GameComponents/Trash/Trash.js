import React, { Component } from 'react'

class Trash extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.trash}
                onClick={this.props.handleClick}
                id='trash'
                name='trash'
                style={{ position: 'absolute', top: 250, left: canvLeft + 510 }}
                alt='trash'
            />
        )
    }
}
export default Trash