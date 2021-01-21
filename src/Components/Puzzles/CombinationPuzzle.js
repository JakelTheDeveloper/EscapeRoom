import React, { Component } from 'react'

class combinationPuzzle extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <div style={{
                position: 'absolute', top: 200, left: canvLeft + 190, width: 250, height: 155, backgroundColor: 'black',
                textAlign: 'center',
                borderStyle: 'solid',
                borderRadius: 20,
            }}>
                <label htmlFor="combGuess"
                    className="combGuess_label"
                >Enter The Combination Code!</label> <br />
                <button type='button' id='incDecBtn' onClick={() => this.props.handleIncClick(1)} className='formBtn'>+</button>
                <button type='button' id='incDecBtn' onClick={() => this.props.handleIncClick(2)} className='formBtn'>+</button>
                <button type='button' id='incDecBtn' onClick={() => this.props.handleIncClick(3)} className='formBtn'>+</button>
                <button type='button' id='incDecBtn' onClick={() => this.props.handleIncClick(4)} className='formBtn'>+</button>
                <button type='button' id='incDecBtn' onClick={() => this.props.handleIncClick(5)} className='formBtn'>+</button><br />
                <div
                    style={{ position: 'absolute', marginRight: 5, left: 56, width: 26, height: 28, background: 'white' }}
                    type="text"
                    id="combGuess_input"
                    name="answer"
                    required
                >{this.props.ans}</div>
                <div
                    style={{ position: 'absolute', marginRight: 5, left: 85, width: 26, height: 28, background: 'white' }}
                    type="text"
                    id="guess_input"
                    name="answer"
                    required
                >{this.props.ans2}</div>
                <div
                    style={{ position: 'absolute', left: 113, width: 25, height: 28, background: 'white' }}
                    type="text"
                    id="guess_input"
                    name="answer"
                    required
                >{this.props.ans3}</div>
                <div
                    style={{ position: 'absolute', left: 140, width: 26, height: 28, background: 'white' }}
                    type="text"
                    id="guess_input"
                    name="answer"
                    required
                >{this.props.ans4}</div>
                <div
                    style={{ position: 'absolute', left: 168, width: 26, height: 28, background: 'white' }}
                    type="text"
                    id="guess_input"
                    name="answer"
                    required
                >{this.props.ans5}</div>
                <br />
                <button type='button' id='incDecBtn' onClick={() => this.props.handleDecClick(1)} className='formBtn'>-</button>
                <button type='button' id='incDecBtn' onClick={() => this.props.handleDecClick(2)} className='formBtn'>-</button>
                <button type='button' id='incDecBtn' onClick={() => this.props.handleDecClick(3)} className='formBtn'>-</button>
                <button type='button' id='incDecBtn' onClick={() => this.props.handleDecClick(4)} className='formBtn'>-</button>
                <button type='button' id='incDecBtn' onClick={() => this.props.handleDecClick(5)} className='formBtn'>-</button>
                <br />
                <button type='button' onClick={this.props.check} className='formBtn'>Enter</button>
            </div>
        )
    }
}
export default combinationPuzzle