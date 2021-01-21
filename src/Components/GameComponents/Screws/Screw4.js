import React, { Component } from 'react'

class Screw4 extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.screw}
                onClick={() => this.props.handleClick('screw4')}
                id='screw4'
                name='screw4'
                style={{ position: 'absolute', top: 380, left: canvLeft + 100 }}
                alt='screw4'
            />
        )
    }
}
export default Screw4