import './App.css'
import Game from '../Game/Game'
import soundSFX from '../soundFileHelper/SoundFile'
import React, { Component } from 'react'
import AssetOBJ from '../AssetHelper/AssetHelper'
import Menu from '../Menu/Menu'
import CircleCursor from '../Components/GameComponents/CircleCursor/CircleCursor'
import Banner from '../Menu/Banner'
import Instructions from '../Menu/Instructions'

class App extends Component {
  constructor(props) {
    super(props)
    this.timer = 0
    this.stopTimer = this.stopTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      timerSFX:true,
      ad:true,
      instructions:false,
      gameStarted: false,
      time: {},
      seconds: 0,
    }
  }
  handleParams = (params) => {
    return params
  }
  handleStart = () => {
    let { gameStarted } = this.state
    this.setState({ gameStarted: gameStarted = true })
    this.timer = setInterval(this.countDown, 1000);
    this.handleParams(gameStarted)
  }
  handleBack = () => {
    let seconds = 0
    let { gameStarted } = this.state
    this.setState({ gameStarted: gameStarted = false })
    this.handleParams(gameStarted)
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
  }
  closeBanner = () => {
    let { ad } = this.state
    this.setState({ ad: ad = false })
    this.handleParams(ad)
  }
  handleInstructions = () => {
    let { instructions } = this.state
    this.setState({ instructions: instructions = true })
    this.handleParams(instructions)
  }
  closeInstructions = () => {
    let { instructions } = this.state
    this.setState({ instructions: instructions = false })
    this.handleParams(instructions)
  }
  
  render() {
    let canvLeft
    if (this.state.width <= 1085) {
      canvLeft = 0
    } else if (this.state.width > 1085 && this.state.width <= 1366) {
      canvLeft = 350
    } else {
      canvLeft = 450
    }
    return (
      <div className="App">
        {(!this.state.gameStarted ?
          <div>
            <Menu
              handleStart={this.handleStart}
              handleInstructions = {this.handleInstructions}
              className="menu"
              screenWidth={this.state.width}
              screenheight={this.state.height}
              canvLeft={canvLeft}
              bg={AssetOBJ.background} />
          </div>
          :
          <div>
            <Game key='game'
              className="canvas"
              handleStop={this.stopTimer}
              handleMute={this.muteTimer}
              handleBack={this.handleBack}
              screenWidth={this.state.width}
              screenheight={this.state.height}
              hours={this.state.time.h}
              minutes={this.state.time.m}
              seconds={this.state.time.s}
            />
          </div>)}
          {(this.state.instructions?
        <Instructions bg = {AssetOBJ.instructions} handleClick = {this.closeInstructions} canvLeft = {canvLeft}/>:null)}
          {(this.state.ad?
        <Banner bg = {AssetOBJ.introBG} handleClick = {this.closeBanner} canvLeft = {canvLeft}/>:null)}
         <CircleCursor id="circleCursor" />
      </div>
    )
  }
  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  stopTimer() {
    clearInterval(this.timer);
  }
  muteTimer=()=>{
    let {timerSFX} = this.state
    this.setState({timerSFX:timerSFX = !timerSFX})
    this.handleParams(timerSFX)
  }
  countDown() {
    let seconds = this.state.seconds + 1;
    if(this.state.timerSFX){
    soundSFX.tickSFX.play()
    }
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidUpdate(){
    if (this.timer === 0 && this.state.seconds >= 0 && this.state.gameStarted) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }
  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
}


export default App;  