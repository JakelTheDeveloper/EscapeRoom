import ReactDOM from 'react-dom'
import Stool from './Stool'

let canvLeft = 0
describe("Stool", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Stool canvLeft = {canvLeft}/>, div)
    })
 })