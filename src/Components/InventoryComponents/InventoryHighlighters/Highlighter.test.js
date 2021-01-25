import ReactDOM from 'react-dom'
import HighLighter from './Highlighter'

let canvLeft = 0
describe("Highlighter Inventory", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <HighLighter top = {30} left = {0} canvLeft = {canvLeft}/>, div)
    })
 })