import React, { Component } from 'react'

class CombinationLock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currCombLock: this.props.currCombLock,
        }
    }
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.state.currCombLock}
                onClick={this.props.handleClick}
                id='combLock'
                name='combLock'
                style={{ position: 'absolute', top: 90, left: canvLeft + 346 }}
                alt='combLock'
            />
        )
    }
}
export default CombinationLock

