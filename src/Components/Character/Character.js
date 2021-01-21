import React, { Component } from 'react'
import GamePad from '../GamePad/GamePad'

class Character extends Component {
    constructor(props) {
        super(props)
        this.char = React.createRef();
        this.state = {
            currLeft: false,
            currRight: false,
            currUp: false,
            currDown: false,
        }
    }
    componentWillUnmount() {
        clearInterval(this.intervalId)
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            let { borders } = this.props
            let circle = this.char.current
            let moveSpeed = 8;
            let canvLeft = this.props.canvLeft
            if (this.props.screenWidth <= 1085) {
                canvLeft = 0
                this.setState({ left: borders.left = canvLeft + 140, right: borders.right = canvLeft + 460 })
            } else if (this.props.screenWidth > 1085 && this.props.screenWidth <= 1366) {
                canvLeft = 350
                this.setState({ left: borders.left = canvLeft + 140, right: borders.right = canvLeft + 460 })
            } else {
                canvLeft = 450
                this.setState({ left: borders.left = canvLeft + 140, right: borders.right = canvLeft + 460 })
            }
            if (this.state.currLeft) {
                let x = parseInt(circle.style.left)
                if (x > this.props.borders.left) {
                    circle.style.left = x - moveSpeed + 'px';
                }
            } if (this.state.currRight) {
                let x = parseInt(circle.style.left)
                if (x < this.props.borders.right) {
                    circle.style.left = x + moveSpeed + 'px';
                }
            } if (this.state.currUp) {
                let y = parseInt(circle.style.top)
                if (y > this.props.borders.top) {
                    circle.style.top = y - moveSpeed + 'px';
                }
            } if (this.state.currDown) {
                let y = parseInt(circle.style.top)
                if (y < this.props.borders.bottom) {
                    circle.style.top = y + moveSpeed + 'px';
                }
            }
        }, 30)
    }

    handleLeftDown = (event) => {
        let { currLeft } = this.state
        if (event.type === "mousedown") {
            this.setState({ currLeft: currLeft = true })
        }
        this.handleParams(currLeft)
    }
    handleLeftUp = (event) => {
        let { currLeft } = this.state
        if (event.type === "mouseup") {
            this.setState({ currLeft: currLeft = false })
        }
        this.handleParams(currLeft)
    }
    handleLeftOut = (event) => {
        let { currLeft } = this.state
        if (event.type === "mouseout") {
            this.setState({ currLeft: currLeft = false })
        }
        this.handleParams(currLeft)
    }

    handleRightDown = (event) => {
        let { currRight } = this.state
        if (event.type === "mousedown") {
            this.setState({ currRight: currRight = true })
        }
        this.handleParams(currRight)
    }
    handleRightUp = (event) => {
        let { currRight } = this.state
        if (event.type === "mouseup") {
            this.setState({ currRight: currRight = false })
        }
        this.handleParams(currRight)
    }
    handleRightOut = (event) => {
        let { currRight } = this.state
        if (event.type === "mouseout") {
            this.setState({ currRight: currRight = false })
        }
        this.handleParams(currRight)
    }

    handleUpDown = (event) => {
        let { currUp } = this.state
        if (event.type === "mousedown") {
            this.setState({ currUp: currUp = true })
        }
        this.handleParams(currUp)
    }
    handleUpUp = (event) => {
        let { currUp } = this.state
        if (event.type === "mouseup") {
            this.setState({ currUp: currUp = false })
        }
        this.handleParams(currUp)
    }
    handleUpOut = (event) => {
        let { currUp } = this.state
        if (event.type === "mouseout") {
            this.setState({ currUp: currUp = false })
        }
        this.handleParams(currUp)
    }

    handleDownDown = (event) => {
        let { currDown } = this.state
        if (event.type === "mousedown") {
            this.setState({ currDown: currDown = true })
        }
        this.handleParams(currDown)
    }
    handleDownUp = (event) => {
        let { currDown } = this.state
        if (event.type === "mouseup") {
            this.setState({ currDown: currDown = false })
        }
        this.handleParams(currDown)
    }
    handleDownOut = (event) => {
        let { currDown } = this.state
        if (event.type === "mouseout") {
            this.setState({ currDown: currDown = false })
        }
        this.handleParams(currDown)
    }
    returnData = () => {
        let char = this.char.current
        let myData = {
            width: char.clientWidth,
            height: char.clientHeight,
            left: parseInt(char.style.left),
            top: parseInt(char.style.top)
        }
        return myData
    }
    handleParams(params) {
        return
    }
    render(props) {
        let canvLeft = this.props.canvLeft
        return (
            <div>
                <div ref={this.char}
                    style={{
                        position: 'absolute',
                        left: canvLeft + 290,
                        top: 260,
                        width: 40,
                        height: 40,
                        fontSize: 20,
                        color: 'white',
                        borderRadius: 50,
                        backgroundColor: 'red'
                    }}>
                </div>
                <GamePad canvLeft={canvLeft} {...props}
                    handleUU={this.handleUpUp} handleUD={this.handleUpDown} handleUO={this.handleUpOut}
                    handleLU={this.handleLeftUp} handleLD={this.handleLeftDown} handleLO={this.handleLeftOut}
                    handleDU={this.handleDownUp} handleDD={this.handleDownDown} handleDO={this.handleDownOut}
                    handleRU={this.handleRightUp} handleRD={this.handleRightDown} handleRO={this.handleRightOut}
                />
            </div>
        )
    }
}
export default Character