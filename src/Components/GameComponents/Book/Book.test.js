import ReactDOM from 'react-dom'
import Book from './Book'

let canvLeft = 0
describe("Book", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <Book canvLeft = {canvLeft}/>, div)
    })
 })