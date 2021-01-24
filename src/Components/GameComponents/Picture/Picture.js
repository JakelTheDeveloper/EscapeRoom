import React, { Component } from 'react'

class Picture extends Component {
    constructor(props) {
        super(props)
        this.picture = React.createRef()
    }
    handleToggled = () => {
        let picture = this.picture.current
        let top = parseInt(picture.style.top)
        if (top < 300) {
            picture.style.top = 320 + 'px';
        } else {
            picture.style.top = 250 + 'px';
        }
    }
    returnData = () => {
        let picture = this.picture.current
        let myData = {
            width: picture.clientWidth,
            height: picture.clientHeight,
            left: parseInt(picture.style.left),
            top: parseInt(picture.style.top)
        }
        return myData
    }
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.picture}
                ref={this.picture}
                onClick={this.props.handleClick}
                id='picture'
                name='picture'
                style={{ position: 'absolute', top: 250, left: canvLeft + 570 }}
                alt='sunny day'
            />
        )
    }
}
export default Picture