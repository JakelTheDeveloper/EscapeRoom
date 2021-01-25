import ReactDOM from 'react-dom'
import Glove from './Glove'

let canvLeft = 0
describe("Glove", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Glove canvLeft = {canvLeft}/>, div)
    })
 })