import ReactDOM from 'react-dom'
import ScrewInventory from './ScrewInventory'

let canvLeft = 0
describe("Screw Inventory", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <ScrewInventory canvLeft = {canvLeft}/>, div)
    })
 })