import React, { Component } from 'react'
import HighScoreItem from './HighScoreItem'
import soundSFX from '../../soundFileHelper/SoundFile'
import config from '../../config'
import AppContext from '../../App/AppContext'

class HighScores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            error: null,
            loading: false
        }
    }

    static contextType = AppContext

    sortByTimeAsc(a, b) {
        let results;
        results = a.hours > b.hours ? 1 : a.hours < b.hours ? -1 : 0;
        if (results === 0)
            results = a.minutes > b.minutes ? 1 : a.minutes < b.minutes ? -1 : 0;
        if (results === 0)
            results = a.seconds > b.seconds ? 1 : a.seconds < b.seconds ? -1 : 0;
        return results;
    }
    render() {
        let data
        let sortedData
        let canvLeft = this.props.canvLeft
        if (this.state.data.length >= 0) {
            data = [...this.context.data]
            sortedData = data.sort(this.sortByTimeAsc)
        } else {
            data = [...this.props.data]
            sortedData = data.sort(this.sortByTimeAsc)
        }
        return (
            <div>
                <img src={this.props.bg}
                    className="menu"
                    onClick={this.props.handleClick}
                    style={{ position: 'absolute', left: canvLeft, top: 50, width: 640, height: 425 }}
                    alt="room"
                />
                <h1 className="text"
                    style={{
                        position: 'absolute',
                        borderColor: '#5c3b09',
                        borderStyle: 'solid',
                        borderWidth: 3,
                        backgroundColor: 'burlywood',
                        borderRadius: 8,
                        left: canvLeft + 230,
                        top: 110,
                        color: '#5c3b09'
                    }}>High Scores</h1>

                <div className="highScoreTable" style={{ position: 'absolute', left: canvLeft + 190, top: 170 }}>
                    {this.state.loading ? <div className="loading">Loading...</div> : null}
                    {this.state.error ? <div className="error">{this.state.error}</div> : null}
                    {sortedData.map(data =>
                        <HighScoreItem key={data.id} user={data.username} hours={data.hours} minutes={data.minutes} seconds={data.seconds} />)}
                </div>
                <button className="menuBtnSmall" onMouseOver={() => soundSFX.selectionSFX.play()} onClick={this.props.handleClick} style={{ position: 'absolute', left: canvLeft + 295, top: 420 }}>Back</button>
            </div>
        )
    }
}
export default HighScores