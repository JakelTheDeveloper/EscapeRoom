import ReactDOM from 'react-dom'
import BoltLock from './BoltLock'

let canvLeft = 0
describe("BoltLock", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <BoltLock canvLeft = {canvLeft}/>, div)
    })
 })