import ReactDOM from 'react-dom'
import Rug from './Rug'

let canvLeft = 0
describe("Rug", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Rug canvLeft = {canvLeft}/>, div)
    })
 })