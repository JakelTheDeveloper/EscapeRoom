import React, { Component } from 'react'

class HighLighter extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <div style={{
                top: this.props.top,
                left: canvLeft + this.props.left,
                height: 28,
                width: 33,
                position: 'absolute',
                pointerEvents: 'none',
                borderRadius: 3,
                borderColor: 'red',
                borderStyle: 'solid',
                borderWidth: 2
              }}></div> 
        )
    }
}
export default HighLighter