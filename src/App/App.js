import './App.css'
import Game from '../Game/Game'
// import Timer from '../Timer/Timer'
import soundSFX from '../soundFileHelper/SoundFile'
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.timer = 0
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      gameStarted: false,
      time: {},
      seconds: 40,
    }
  }
  render() {
    return (
      <div className="App">
        <Game key='game' className="canvas"  screenWidth={this.state.width} screenheight={this.state.height} />
        <button onClick={this.startTimer}>Start</button><br />
              h:{this.state.time.h}  m: {this.state.time.m} s: {this.state.time.s}
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

  startTimer() {
    if (this.timer === 0 && this.state.seconds >= 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // add one second, set state so a re-render happens.
    let seconds = this.state.seconds + 1;
    soundSFX.tickSFX.play()
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
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