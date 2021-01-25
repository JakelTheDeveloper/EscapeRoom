import ReactDOM from 'react-dom'
import Instructions from './Instructions'

describe("Instructions", () => {
   it("renders without crashing", () => {
      const div = document.createElement("div")
      ReactDOM.render(<Instructions canvLeft={0}/>, div)
   })
})
