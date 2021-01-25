import ReactDOM from 'react-dom'
import Lamp from './Lamp'

let canvLeft = 0
describe("Lamp", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Lamp canvLeft = {canvLeft}/>, div)
    })
 })