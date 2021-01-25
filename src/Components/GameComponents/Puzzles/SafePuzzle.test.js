import ReactDOM from 'react-dom'
import SafePuzzle from './SafePuzzle'

let canvLeft = 0
describe("Safe Puzzle", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <SafePuzzle canvLeft = {canvLeft}/>, div)
    })
 })