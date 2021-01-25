import ReactDOM from 'react-dom'
import Couch from './Couch'

let canvLeft = 0
describe("Couch", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Couch canvLeft = {canvLeft}/>, div)
    })
 })