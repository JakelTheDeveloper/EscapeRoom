import React, { Component } from 'react'

class GloveInventory extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.glove}
                onClick={() => this.props.handleClick('glove')}
                id='glove_inventory'
                name='glove_inventory'
                style={{position: 'absolute',top: 430,left: canvLeft + 142}}
                alt='glove_inventory'
            />
        )
    }
}
export default GloveInventory