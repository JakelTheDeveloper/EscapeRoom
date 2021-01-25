import ReactDOM from 'react-dom'
import BobbyPinInventory from './BobbyPinInventory'

let canvLeft = 0
describe("BobbyPin Inventory", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <BobbyPinInventory canvLeft = {canvLeft}/>, div)
    })
 })