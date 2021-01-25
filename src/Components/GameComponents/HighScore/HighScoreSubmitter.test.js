import ReactDOM from 'react-dom'
import HighScoreSubmitter from './HighScoreSubmitter'

let canvLeft = 0
describe("HighScore Submitter", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <HighScoreSubmitter canvLeft = {canvLeft}/>, div)
    })
 })