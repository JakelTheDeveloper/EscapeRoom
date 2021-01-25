import ReactDOM from 'react-dom'
import KeyLock from './KeyLock'

let canvLeft = 0
describe("KeyLock", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <KeyLock canvLeft = {canvLeft}/>, div)
    })
 })