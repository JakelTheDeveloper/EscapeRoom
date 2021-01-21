import React, { Component } from 'react'

class BoltLock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currBoltLock: this.props.currBoltLock,
        }
    }
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.state.currBoltLock}
          onClick={this.props.handleClick}
          id='boltLock'
          name='boltLock'
          style={{ position: 'absolute', top: 105, left: canvLeft + 346 }}
          alt='boltLock'
        /> 
        )
    }
}
export default BoltLock