import React, { Component } from 'react'

class SafePuzzle extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <div style={{
                position: 'absolute', top: 200, left: canvLeft + 190, width: 250, height: 155, backgroundColor: 'black',
                textAlign: 'center',
                borderStyle: 'solid',
                borderRadius: 5,
              }}>
                <label htmlFor="safeGuess"
                  className="guess_label"
                >Enter The Correct Safe Code!</label> <br />
                <button type='button' id='incDecBtn' onClick={() => this.props.handleIncClick(1)} className='formBtn'>+</button>
                <button type='button' id='incDecBtn' onClick={() => this.props.handleIncClick(2)} className='formBtn'>+</button>
                <button type='button' id='incDecBtn' onClick={() => this.props.handleIncClick(3)} className='formBtn'>+</button><br />
                <div
                  style={{ position: 'absolute', marginRight: 5, left: 83, width: 26, height: 28, background: 'white' }}
                  type="text"
                  id="guess_input"
                  name="answer"
                  required
                >{this.props.ans}</div>
                <div
                  style={{ position: 'absolute', marginRight: 5, left: 112, width: 26, height: 28, background: 'white' }}
                  type="text"
                  id="guess_input"
                  name="answer2"
                  required
                >{this.props.ans2}</div>
                <div
                  style={{ position: 'absolute', left: 140, width: 26, height: 28, background: 'white' }}
                  type="text"
                  id="guess_input"
                  name="answer3"
                  required
                >{this.props.ans3}</div>
                <br />
                <button type='button' id='incDecBtn' onClick={() => this.props.handleDecClick(1)} className='formBtn'>-</button>
                <button type='button' id='incDecBtn' onClick={() => this.props.handleDecClick(2)} className='formBtn'>-</button>
                <button type='button' id='incDecBtn' onClick={() => this.props.handleDecClick(3)} className='formBtn'>-</button>
                <br />
                <button type='button' onClick={this.props.check} className='formBtn'>Enter</button>
              </div> 
        )
    }
}

export default SafePuzzle
