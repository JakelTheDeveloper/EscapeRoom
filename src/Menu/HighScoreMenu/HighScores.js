import React, { Component } from 'react'
import HighScoreItem from './HighScoreItem'
import soundSFX from '../../soundFileHelper/SoundFile'

class HighScores extends Component {
    sortByTimeAsc (a, b)  {
        let results;
        results = a.time.h > b.time.h ? 1 : a.time.h < b.time.h ? -1 : 0;
        if (results === 0)
            results = a.time.m > b.time.m ? 1 : a.time.m < b.time.m ? -1 : 0;
        if (results === 0)
            results = a.time.s > b.time.s ? 1 : a.time.s < b.time.s ? -1 : 0;
        return results;
    }
    render() {
        let canvLeft = this.props.canvLeft
        let data = [...this.props.data]
        let sortedData = data.sort(this.sortByTimeAsc)
        return (
            <div>
            <img src={this.props.bg}
            className = "menu"
            onClick = {this.props.handleClick}
            style={{ position: 'absolute', left: canvLeft, top: 50, width: 640, height: 425 }}
            alt="room"
            />
            <h1 className = "text" 
            style={{ 
                position: 'absolute', 
                borderColor:'#5c3b09',
                borderStyle:'solid',
                borderWidth:3,
                backgroundColor: 'burlywood',
                borderRadius:8,
                left: canvLeft + 230, 
                top: 110,
                color:'#5c3b09' 
                }}>High Scores</h1>

            <div className = "highScoreTable" style={{ position: 'absolute', left: canvLeft + 240, top: 170}}>
            {sortedData.map(data => <HighScoreItem key={data.id} user ={data.user} time={data.time}/>)}
            </div>
            <button className= "menuBtnSmall" onMouseOver = {()=>soundSFX.selectionSFX.play()} onClick = {this.props.handleClick} style={{ position: 'absolute', left: canvLeft + 295, top: 420}}>Back</button>
            </div>
        )
    }
}
export default HighScores