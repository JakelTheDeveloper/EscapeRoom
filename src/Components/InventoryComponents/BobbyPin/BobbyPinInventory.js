import React, { Component } from 'react'

class BobbyPinInventory extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.bobbyPin}
                onClick={() => this.props.handleClick('bobbyPin')}
                id='bobbyPin_inventory'
                name='bobbyPin_inventory'
                style={{position: 'absolute',top: 433,left: canvLeft + 68,width: 16,height: 16}}
                alt='bobbyPin_inventory'
            />
        )
    }
}
export default BobbyPinInventory