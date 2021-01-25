import ReactDOM from 'react-dom'
import CircleCursor from './CircleCursor'

describe("Circle Cursor", () => {
    it("renders without crashing", () => {
       const div = document.createElement("div")
       ReactDOM.render(
             <CircleCursor />, div)
    })
 })