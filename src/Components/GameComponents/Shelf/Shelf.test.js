import ReactDOM from 'react-dom'
import Shelf from './Shelf'

let canvLeft = 0
describe("Shelf", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Shelf canvLeft = {canvLeft}/>, div)
    })
 })