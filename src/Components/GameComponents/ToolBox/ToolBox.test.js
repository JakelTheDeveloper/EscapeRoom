import ReactDOM from 'react-dom'
import ToolBox from './ToolBox'

let canvLeft = 0
describe("ToolBox", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <ToolBox canvLeft = {canvLeft}/>, div)
    })
 })