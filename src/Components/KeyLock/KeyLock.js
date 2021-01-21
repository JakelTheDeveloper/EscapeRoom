import React, { Component } from 'react'

class KeyLock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currKeyLock: this.props.currKeyLock,
        }
    }
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.state.currKeyLock}
                onClick={this.props.handleClick}
                id='keyLock'
                name='keyLock'
                style={{ position: 'absolute', top: 105, left: canvLeft + 344 }}
                alt='keyLock'
            />
        )
    }
}
export default KeyLock

