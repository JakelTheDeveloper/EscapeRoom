import React, { Component } from 'react'

class Shelf extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.shelf}
                id='shelf'
                name='shelf'
                style={{ position: 'absolute', top: 80, left: canvLeft + 45 }}
                alt='shelf'
            />
        )
    }
}
export default Shelf