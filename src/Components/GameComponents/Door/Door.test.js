import ReactDOM from 'react-dom'
import Door from './Door'

let canvLeft = 0
describe("Door", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Door canvLeft = {canvLeft}/>, div)
    })
 })