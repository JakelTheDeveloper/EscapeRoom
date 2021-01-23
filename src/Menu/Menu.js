import React, { Component } from 'react'
import MenuItem from './MenuItem/MenuItem'

class Menu extends Component {
    handleStartGame=()=>{
        this.props.handleStart()
    }
    render() {
        let canvLeft = this.props.canvLeft
        let startGame = "Start Game"
        let highScores = "High Scores"
        let instructions = "Instructions"
        return (
            <div>
            <img src={this.props.bg}
                style={{ position: 'absolute', left: canvLeft, top: 50 }}
                width={640}
                height={425}
                alt='menu'
            />
             <h1 className = "text" style={{ position: 'absolute', left: canvLeft + 220, top: 200,color:'red' }}>Escape Room</h1>
             <MenuItem handlePlay = {this.handlePlay} handleClick = {this.props.handleInstructions} canvLeft={canvLeft} top ={340} left ={275} item = {instructions}/>
             <MenuItem handlePlay = {this.handlePlay} canvLeft={canvLeft} top ={305} left ={275} item = {highScores}/>
             <MenuItem handlePlay = {this.handlePlay} handleClick = {this.handleStartGame} canvLeft={canvLeft} top ={270} left ={278} item = {startGame}/>
            </div>
        )
    }
}
export default Menu