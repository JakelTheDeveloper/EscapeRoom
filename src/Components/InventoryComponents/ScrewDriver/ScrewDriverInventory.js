import React, { Component } from 'react'

class ScrewDriverInventory extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.screwDriver}
                onClick={() => this.props.handleClick('screwDriver')}
                id='screwDriver_inventory'
                name='screwDriver_inventory'
                style={{position: 'absolute',top: 437,left: canvLeft + 217}}
                alt='screwDriver_inventory'
            />
        )
    }
}
export default ScrewDriverInventory