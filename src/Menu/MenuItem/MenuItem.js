import React, { Component } from 'react'
import soundSFX from '../../soundFileHelper/SoundFile'
class MenuItem extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
                <div className="menuItem" onMouseOver={() => soundSFX.selectionSFX.play()} onClick={this.props.handleClick}
                    style={{ top: this.props.top, left: canvLeft + this.props.left }}
                >{this.props.item}</div>

        )
    }
}
export default MenuItem