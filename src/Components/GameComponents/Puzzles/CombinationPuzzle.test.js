import ReactDOM from 'react-dom'
import CombinationPuzzle from './CombinationPuzzle'

let canvLeft = 0
describe("Combination Puzzle", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <CombinationPuzzle canvLeft = {canvLeft}/>, div)
    })
 })