import React, { Component } from 'react'

class ScrewInventory extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.screw}
                onClick={() => this.props.handleClick('screws')}
                id='screw_inventory'
                name='screw_inventory'
                style={{ position: 'absolute', top: 433, left: canvLeft + 26 }}
                alt='inventoryHolder'
            />
        )
    }
}
export default ScrewInventory