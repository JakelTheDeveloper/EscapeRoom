import React, { Component } from 'react'

class Screw3 extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.screw}
                onClick={() => this.props.handleClick('screw3')}
                id='screw3'
                name='screw3'
                style={{ position: 'absolute', top: 180, left: canvLeft + 485 }}
                alt='screw3'
            />
        )
    }
}
export default Screw3