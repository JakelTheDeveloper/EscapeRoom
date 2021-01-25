import ReactDOM from 'react-dom'
import HighScoreItem from './HighScoreItem'

let canvLeft = 0
describe("HighScore Item", () => {
   it("renders without crashing", () => {
      const div = document.createElement("div")
      ReactDOM.render(<HighScoreItem canvLeft={canvLeft}/>, div)
   })
})
