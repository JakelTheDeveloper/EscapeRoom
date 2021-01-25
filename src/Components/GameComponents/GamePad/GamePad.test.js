import ReactDOM from 'react-dom'
import GamePad from './GamePad'

let canvLeft = 0
describe("GamePad", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <GamePad canvLeft = {canvLeft}/>, div)
    })
 })