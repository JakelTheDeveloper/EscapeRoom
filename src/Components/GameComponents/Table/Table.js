import React, { Component } from 'react'

class Table extends Component {
    constructor(props) {
        super(props)
        this.table = React.createRef();
    }
    returnData =()=> {
        let table = this.table.current
        let myData = {
            width:table.clientWidth,
            height:table.clientHeight,
            left:parseInt(table.style.left),
            top:parseInt(table.style.top)
        }
        return myData
    }
    render() {
        let canvLeft = this.props.canvLeft
        return (
            <img src={this.props.table}
                ref={this.table}
                id='table'
                name='table'
                style={{position: 'absolute',top: 330,left: canvLeft + 410}}
                alt='table'
            />
        )
    }
}
export default Table