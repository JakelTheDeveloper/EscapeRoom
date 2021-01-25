import ReactDOM from 'react-dom'
import HitBox from './HitBox'

let canvLeft = 0
describe("HitBox", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <HitBox canvLeft = {canvLeft}/>, div)
    })
 })