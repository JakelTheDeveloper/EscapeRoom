import React, { Component } from 'react'

class GamePad extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <div className="btnPanel">
            <button className="btn"
              onMouseDown={this.props.handleUD}
              onMouseUp={this.props.handleUU}
              onMouseOut={this.props.handleUO}
              id='btnUp'
              style={{
                position: 'absolute',
                top: 480,
                left: canvLeft + 280,
                width: 70,
                height: 70,
                borderRadius: 50,
                fontSize: 20,
                color: 'white',
                backgroundColor: '#DC0000',
                cursor: 'none'
              }}
            >&#8593;
          </button>
          <br />
            <button className="btn"
              onMouseDown={this.props.handleLD}
              onMouseUp={this.props.handleLU}
              onMouseOut={this.props.handleLO}
              style={{
                position: 'absolute',
                top: 550,
                left: canvLeft + 210,
                width: 70,
                height: 70,
                borderRadius: 50,
                fontSize: 20,
                color: 'white',
                backgroundColor: '#DC0000',
                cursor: 'none'
              }}
            >&#8592;
          </button>
            <button className="btn"
              onMouseDown={this.props.handleDD}
              onMouseUp={this.props.handleDU}
              onMouseOut={this.props.handleDO}
              style={{
                position: 'absolute',
                top: 550,
                left: canvLeft + 280,
                width: 70,
                height: 70,
                borderRadius: 50,
                fontSize: 20,
                color: 'white',
                backgroundColor: '#DC0000',
                cursor: 'none'
              }}
            >&#8595;
          </button>
            <button className="btn"
              onMouseDown={this.props.handleRD}
              onMouseUp={this.props.handleRU}
              onMouseOut={this.props.handleRO}
              style={{
                position: 'absolute',
                top: 550,
                left: canvLeft + 350,
                width: 70,
                height: 70,
                borderRadius: 50,
                fontSize: 20,
                color: 'white',
                backgroundColor: '#DC0000',
                cursor: 'none'
              }}
            >&#8594;
          </button>
            <br />
          </div>
        )
    }
}
export default GamePad