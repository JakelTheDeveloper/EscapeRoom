import ReactDOM from 'react-dom'
import Table from './Table'

let canvLeft = 0
describe("Table", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Table canvLeft = {canvLeft}/>, div)
    })
 })