import ReactDOM from 'react-dom'
import KeyInventory from './KeyInventory'

let canvLeft = 0
describe("Key Inventory", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <KeyInventory canvLeft = {canvLeft}/>, div)
    })
 })