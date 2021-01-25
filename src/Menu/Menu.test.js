import ReactDOM from 'react-dom'
import Menu from './Menu'

describe("Menu", () => {
   it("renders without crashing", () => {
      const div = document.createElement("div")
      ReactDOM.render(<Menu canvLeft={0}/>, div)
   })
})
