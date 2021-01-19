import './App.css'
import Canvas from '../Canvases/Canvas'
import React, { Component } from 'react'

class App extends Component {
  state = { width: window.innerWidth, height: window.innerHeight };

  render() {
    return (
      <div className="App">
        <Canvas key='canvas' className="canvas" screenWidth={this.state.width} screenheight={this.state.height} />
        <div style={{ color: 'white' }}>{this.state.width}</div>
      </div>
    )

  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
}

export default App;  