import React, { Component } from 'react'

class Screw2 extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.screw}
                onClick={() => this.props.handleClick('screw2')}
                id='screw2'
                name='screw2'
                style={{ position: 'absolute', top: 95, left: canvLeft + 440 }}
                alt='screw2'
            />
        )
    }
}
export default Screw2