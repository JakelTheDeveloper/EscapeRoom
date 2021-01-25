import ReactDOM from 'react-dom'
import Papers from './Papers'

let canvLeft = 0
describe("Papers", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Papers canvLeft = {canvLeft}/>, div)
    })
 })