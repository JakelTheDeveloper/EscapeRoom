import ReactDOM from 'react-dom'
import CombinationLock from './CombinationLock'

let canvLeft = 0
describe("CombinationLock", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <CombinationLock canvLeft = {canvLeft}/>, div)
    })
 })