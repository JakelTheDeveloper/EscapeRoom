import React, { Component } from 'react'

class CrowBarInventory extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.crowBar}
                onClick={() => this.props.handleClick('crowBar')}
                id='crowBar_inventory'
                name='crowBar_inventory'
                style={{position: 'absolute',top: 427,left: canvLeft + 190}}
                alt='crowBar_inventory'
            />
        )
    }
}
export default CrowBarInventory