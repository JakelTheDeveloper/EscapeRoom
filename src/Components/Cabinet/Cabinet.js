import React, { Component } from 'react'

class Cabinet extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.cabinet}
                id='cabinet'
                name='cabinet'
                style={{position: 'absolute',top: 370,left: canvLeft + 310}}
                alt='cabinet'
            />
        )
    }
}
export default Cabinet