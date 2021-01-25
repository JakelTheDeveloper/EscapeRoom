import ReactDOM from 'react-dom'
import BulbInventory from './BulbInventory'

let canvLeft = 0
describe("Bulb Inventory", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <BulbInventory canvLeft = {canvLeft}/>, div)
    })
 })