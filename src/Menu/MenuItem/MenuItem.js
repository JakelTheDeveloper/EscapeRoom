import React, { Component } from 'react'
import soundSFX from '../../soundFileHelper/SoundFile'
class MenuItem extends Component {
    handlePlay = () => {
        soundSFX.selectionSFX.play()
    }
    render() {
        let canvLeft = this.props.canvLeft
        return (
                <div className="menuItem" onMouseOver={() => this.handlePlay()} onClick={this.props.handleClick}
                    style={{ top: this.props.top, left: canvLeft + this.props.left }}
                >{this.props.item}</div>

        )
    }
}
export default MenuItem