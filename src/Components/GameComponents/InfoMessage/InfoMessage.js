import React, { Component } from 'react'

class InfoMessage extends Component {
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <section >
            <div className='infoPaper'
              style={{
                backgroundColor: 'white',
                borderStyle: 'solid',
                borderRadius: 5,
                position: 'absolute',
                width: 250,
                height: 150,
                left: canvLeft + 200,
                top: 150
              }}
            >{this.props.infoMessage}
            </div>
            <button onClick={this.props.clearInfo} style={{
              position: 'absolute',
              top: 262,
              left: canvLeft + 310,
              width: 40,
              height: 40,
              borderRadius: 50,
              color: 'white',
              backgroundColor: 'green',
              cursor: 'none'
            }}>Back</button>
          </section>
        )
    }
}
export default InfoMessage