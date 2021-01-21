import React, { Component } from 'react'

class Rug extends Component {
    constructor(props) {
        super(props)
        this.rug = React.createRef();
    }
    returnData =()=> {
        let rug = this.rug.current
        let myData = {
            width:rug.clientWidth,
            height:rug.clientHeight,
            left:parseInt(rug.style.left),
            top:parseInt(rug.style.top)
        }
        return myData
    }
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.currRug}
                ref={this.rug}
                onClick={this.props.handleClick}
                id='rug'
                name='rug'
                style={{ position: 'absolute', top: 122, left: canvLeft + 255 }}
                alt='rug'
            />
        )
    }
}
export default Rug