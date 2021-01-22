import React, { Component } from 'react'

class Menu extends Component {
    render(props) {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.bg}
                style={{ position: 'absolute', left: canvLeft, top: 50 }}
                width={640}
                height={425}
                alt='menu'
            />
        )
    }
}
export default Menu