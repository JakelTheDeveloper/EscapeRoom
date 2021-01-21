import React, { Component } from 'react'

class InventoryHolder extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.inventoryHolder}
                id='inventoryHolder'
                name='inventoryHolder'
                style={{position: 'absolute',top: 420,left: canvLeft + 10}}
                alt='inventoryHolder'
            />
        )
    }
}
export default InventoryHolder