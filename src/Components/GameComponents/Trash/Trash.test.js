import ReactDOM from 'react-dom'
import Trash from './Trash'

let canvLeft = 0
describe("Trash", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Trash canvLeft = {canvLeft}/>, div)
    })
 })