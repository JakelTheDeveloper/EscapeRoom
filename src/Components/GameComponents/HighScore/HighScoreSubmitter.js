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
             <button type = "button" onMouseOver = {()=>this.handlePlay()} onClick={this.props.clearInfo} className = 'menuItem' style={{
              marginTop: 5,
              left: canvLeft - 305,
            }}>Submit</button>
            </div>
           
          </form>
        )
    }
}
export default HighScoreSubmitter