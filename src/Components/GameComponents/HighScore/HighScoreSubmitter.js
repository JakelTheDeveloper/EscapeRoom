import React, { Component } from 'react'
import AppContext from '../../../App/AppContext'
import config from '../../../config'
import soundSFX from '../../../soundFileHelper/SoundFile'

class HighScoreSubmitter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      error:null,
      time: {}
    }
    this.handleChange = this.handleChange.bind(this)
    
  }

  static contextType = AppContext

  handlePlay = () => {
    soundSFX.selectionSFX.play()
  }
  handleChange(event) {
    const value = event.target.value
    this.setState({ ...this.state, [event.target.name]: value })
  }
  handleSubmit = e => {
    e.preventDefault()
    if (this.state.username === undefined || this.state.username.length === 0) {
      this.setState({error:"Please enter a name!"})
    }else if(this.state.username.length > 8 ){
      this.setState({error:"Name has to be 8 or less characters!"})
        } else {
          const url = `${config.URL}/api/scores`
          const options = {
            method: 'POST',
            body: JSON.stringify({
              username: this.state.username,
              hours: this.props.hours,
              minutes: this.props.minutes,
              seconds: this.props.seconds
            }),
            headers: { 'Content-Type': 'application/json' }
          }
          fetch(url, options)
            .then(res => {
              if (!res.ok) {
                throw new Error('Something went wrong, please try again later')
              }
              return res.json()
            })
            .then(score => {
              this.context.addScore(score)
              this.props.handleBack()
            })
            .catch(err => this.setState({ error: err.message }))
        }
  }
  render() {
    let canvLeft = this.props.canvLeft
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <div className='highScoreSubmit'
          style={{
            left: canvLeft + 240,
            top: 150
          }}
        >{this.props.highScoreMessage}<br />
          <label htmlFor="username" className="username_label">Enter Your Name</label><br />
          <input type="text" id="username" name="username" onChange={this.handleChange} /><br />
        </div>
        <button type="button" onMouseOver={() => this.handlePlay()} onClick={this.props.handleBack} className='menuItem' style={{
          top: 330,
          left: canvLeft + 297,
        }}>Menu</button>
        <button type="button" onMouseOver={() => this.handlePlay()} onClick={this.handleSubmit} className='menuItem' style={{
          top: 300,
          left: canvLeft + 290,
        }}>Submit</button>
      </form>
       {(this.state.error && this.state.error === 'Please enter a name!'?<div className = "highScoreSubmit" 
       style={{color:'black',fontSize:18,position:'absolute',top: 60,left: canvLeft + 220}}>{this.state.error}</div>:
       this.state.error && this.state.error !== 'Please enter a name!'?<div className = "highScoreSubmit" 
       style={{color:'black',fontSize:18,position:'absolute',top: 60,left: canvLeft + 160}}>{this.state.error}</div>:null)}
       </div>
    )
  }
}
export default HighScoreSubmitter