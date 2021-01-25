import ReactDOM from 'react-dom'
import BobbyPin from './BobbyPin'

let canvLeft = 0
describe("BobbyPin", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <BobbyPin canvLeft = {canvLeft}/>, div)
    })
 })