import ReactDOM from 'react-dom'
import InventoryHolder from './InventoryHolder'

let canvLeft = 0
describe("Inventory Holder", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <InventoryHolder canvLeft = {canvLeft}/>, div)
    })
 })