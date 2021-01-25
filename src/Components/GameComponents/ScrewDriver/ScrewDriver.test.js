import ReactDOM from 'react-dom'
import ScrewDriver from './ScrewDriver'

let canvLeft = 0
describe("ScrewDriver", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <ScrewDriver canvLeft = {canvLeft}/>, div)
    })
 })