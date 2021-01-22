import React, { Component } from 'react'

class BulbInventory extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.bulb}
                onClick={() => this.props.handleClick('bulb')}
                id='bulb_inventory'
                name='bulb_inventory'
                style={{ position: 'absolute', top: 427, left: canvLeft + 107 }}
                alt='bulb_inventory'
            />
        )
    }
}
export default BulbInventory