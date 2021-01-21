import React, { Component } from 'react'

class Canvas extends Component {
    render(props) {
        let canvLeft = this.props.canvLeft
        return (
            <img src = {this.props.bg}
            style={{ position: 'absolute', left: canvLeft, top: 50 }}
            width={640}
            height={425}
            alt = "room"
            />
        )
    }
}
export default Canvas