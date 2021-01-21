import React, { Component } from 'react'

class ScrewDriver extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.screwDriver}
                onClick={this.props.handleClick}
                id='screwDriver'
                name='screwDriver'
                style={{position: 'absolute',top: 365,left: canvLeft + 335}}
                alt='screwDriver'
            />
        )
    }
}
export default ScrewDriver