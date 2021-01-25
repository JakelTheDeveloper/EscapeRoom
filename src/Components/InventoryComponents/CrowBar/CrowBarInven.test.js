import ReactDOM from 'react-dom'
import CrowBarInventory from './CrowBarInventory'

let canvLeft = 0
describe("CrowBar Inventory", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <CrowBarInventory canvLeft = {canvLeft}/>, div)
    })
 })