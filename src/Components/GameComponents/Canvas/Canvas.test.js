import ReactDOM from 'react-dom'
import Canvas from './Canvas'

let canvLeft = 0
describe("Canvas", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Canvas canvLeft = {canvLeft}/>, div)
    })
 })