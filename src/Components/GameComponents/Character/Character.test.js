import ReactDOM from 'react-dom'
import Character from "./Character"

let canvLeft = 0
describe("Character", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Character canvLeft = {canvLeft}/>, div)
    })
 })