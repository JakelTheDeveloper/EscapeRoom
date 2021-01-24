import React, { Component } from 'react'

class CircleCursor extends Component {
    constructor(props) {
        super(props)
        this.circleCursor = React.createRef()
    }
    componentDidMount() {
        let circleCursor = this.circleCursor.current
        const onMouseMove = (e) => {
            circleCursor.style.left = e.pageX + 'px'
            circleCursor.style.top = e.pageY + 'px'
        }
        window.addEventListener('mousemove', onMouseMove)
    }
    render() {
        return <div id="circleCursor" ref={this.circleCursor}></div>
    }
}
export default CircleCursor

