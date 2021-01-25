import ReactDOM from 'react-dom'
import Picture from './Picture'

let canvLeft = 0
describe("Picture", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Picture canvLeft = {canvLeft}/>, div)
    })
 })