import React, { Component } from 'react'

class LightOffFilter extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <div
            style={{
              backgroundColor: '#000000',
              opacity: 0.9,
              pointerEvents: 'none',
              position: 'absolute',
              width: 640,
              height: 425,
              left: canvLeft,
              top: 50
            }}>
          </div>
        )
    }
}
export default LightOffFilter