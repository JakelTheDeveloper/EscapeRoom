import React, { Component } from 'react'

class Book extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.book}
                onClick={this.props.handleClick}
                id='book'
                name='book'
                style={{ position: 'absolute', top: 350, left: canvLeft + 540 }}
                alt='book'
            />
        )
    }
}
export default Book