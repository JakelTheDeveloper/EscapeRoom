import ReactDOM from 'react-dom'
import CrowBar from './CrowBar'

let canvLeft = 0
describe("CrowBar", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <CrowBar canvLeft = {canvLeft}/>, div)
    })
 })