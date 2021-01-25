import ReactDOM from 'react-dom'
import ScrewDriverInventory from './ScrewDriverInventory'

let canvLeft = 0
describe("ScrewDriver Inventory", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <ScrewDriverInventory canvLeft = {canvLeft}/>, div)
    })
 })