import ReactDOM from 'react-dom'
import MenuItem from './MenuItem'

describe("MenuItem", () => {
   it("renders without crashing", () => {
      const div = document.createElement("div")
      ReactDOM.render(<MenuItem />, div)
   })
})
