import React, { Component } from 'react'
import soundSFX from '../../../soundFileHelper/SoundFile'

class HighScoreSubmitter extends Component {
  handlePlay=()=>{
    soundSFX.selectionSFX.play()
  }
    render() {
        let canvLeft = this.props.canvLeft
        return (
          <form onSubmit={this.handleSubmit}>
            <div className='highScoreSubmit'
              style={{
                left: canvLeft + 240,
                top: 150
              }}
            >{this.props.highScoreMessage}<br/>
            <label htmlFor="username" className="username_label">Enter Your Name</label><br/>
            <input type="text" id="username" name="username" onChange={this.handleChange}/><br/>
            </div>
            <button type = "button" onMouseOver = {()=>this.handlePlay()} onClick={this.props.handleBack} className = 'menuItem' style={{
              top: 330,
              left: canvLeft + 297,
            }}>Menu</button>
            <button type = "button" onMouseOver = {()=>this.handlePlay()} onClick={this.props.clearInfo} className = 'menuItem' style={{
              top: 300,
              left: canvLeft + 290,
            }}>Submit</button>
          </form>
        )
    }
}
export default HighScoreSubmitter