import React, { Component } from 'react'

class Screw1 extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.screw}
                onClick={() => this.props.handleClick('screw1')}
                id='screw1'
                name='screw1'
                style={{ position: 'absolute', top: 120, left: canvLeft + 378 }}
                alt='screw1'
            />
        )
    }
}
export default Screw1