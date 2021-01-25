import ReactDOM from 'react-dom'
import InfoMessage from './InfoMessage'

let canvLeft = 0
describe("Info Message", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <InfoMessage canvLeft = {canvLeft}/>, div)
    })
 })