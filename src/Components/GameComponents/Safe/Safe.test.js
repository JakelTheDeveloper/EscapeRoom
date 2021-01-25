import ReactDOM from 'react-dom'
import Safe from './Safe'

let canvLeft = 0
describe("Safe", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Safe canvLeft = {canvLeft}/>, div)
    })
 })