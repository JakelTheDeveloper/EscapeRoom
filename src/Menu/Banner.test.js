import ReactDOM from 'react-dom'
import Banner from './Banner'

describe("Banner", () => {
   it("renders without crashing", () => {
      const div = document.createElement("div")
      ReactDOM.render(<Banner canvLeft={0}/>, div)
   })
})
