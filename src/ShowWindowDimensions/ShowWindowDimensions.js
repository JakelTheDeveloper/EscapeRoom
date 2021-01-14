import React from 'react';

class ShowWindowDimensions extends React.Component {
  state = { width: 0, height: 0 };
  render() {
    return <span color = "white">Window size: {this.state.width} x {this.state.height}</span>;
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

export default ShowWindowDimensions