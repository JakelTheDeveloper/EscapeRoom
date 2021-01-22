import './App.css'
import Game from '../Game/Game'
import soundSFX from '../soundFileHelper/SoundFile'
import React, { Component } from 'react'
import AssetOBJ from '../AssetHelper/AssetHelper'
import Menu from '../Menu/Menu'
import CircleCursor from '../Components/GameComponents/CircleCursor/CircleCursor'

class App extends Component {
  constructor(props) {
    super(props)
    this.timer = 0
    this.stopTimer = this.stopTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
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
    this.handleParams(gameStarted)
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
            {canvLeft}
            <Menu
              handleStart={this.handleStart}
              className="menu"
              screenWidth={this.state.width}
              screenheight={this.state.height}
              canvLeft={canvLeft}
              bg={AssetOBJ.background} />
            <CircleCursor id="circleCursor" />
          </div>
          :
          <div>
            <Game key='game'
              className="canvas"
              handleStop={this.stopTimer}
              screenWidth={this.state.width}
              screenheight={this.state.height}
              hours={this.state.time.h}
              minutes={this.state.time.m}
              seconds={this.state.time.s}
            />
          </div>)}
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

  countDown() {
    let seconds = this.state.seconds + 1;
    soundSFX.tickSFX.play()
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