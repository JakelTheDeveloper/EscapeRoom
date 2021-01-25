import ReactDOM from 'react-dom'
import GloveInventory from './GloveInventory'

let canvLeft = 0
describe("Glove Inventory", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <GloveInventory canvLeft = {canvLeft}/>, div)
    })
 })