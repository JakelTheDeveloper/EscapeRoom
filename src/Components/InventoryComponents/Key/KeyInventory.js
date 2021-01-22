import React, { Component } from 'react'

class KeyInventory extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.houseKey}
                onClick={() => this.props.handleClick('key')}
                id='key_inventory'
                name='key_inventory'
                style={{ position: 'absolute', top: 432, left: canvLeft + 267 }}
                alt='key_inventory'
            />
        )
    }
}
export default KeyInventory