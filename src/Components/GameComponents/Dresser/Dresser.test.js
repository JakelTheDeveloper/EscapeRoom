import ReactDOM from 'react-dom'
import Dresser from './Dresser'

let canvLeft = 0
describe("Dresser", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Dresser canvLeft = {canvLeft}/>, div)
    })
 })