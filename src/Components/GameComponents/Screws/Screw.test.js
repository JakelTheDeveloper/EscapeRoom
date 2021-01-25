import ReactDOM from 'react-dom'
import Screw1 from './Screw1'

let canvLeft = 0
describe("All Screws", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Screw1 canvLeft = {canvLeft}/>, div)
    })
 })