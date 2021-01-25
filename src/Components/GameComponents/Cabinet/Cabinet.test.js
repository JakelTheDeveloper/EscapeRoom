import Cabinet from './Cabinet'
import ReactDOM from 'react-dom'

let canvLeft = 0
describe("Book", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Cabinet canvLeft = {canvLeft}/>, div)
    })
 })