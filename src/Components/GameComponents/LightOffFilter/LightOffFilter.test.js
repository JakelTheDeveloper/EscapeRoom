import ReactDOM from 'react-dom'
import LightOffFilter from './LightOffFilter'

let canvLeft = 0
describe("LightsOffFilter", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <LightOffFilter canvLeft = {canvLeft}/>, div)
    })
 })