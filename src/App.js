import './App.css';
import ShowWindowDimensions from './ShowWindowDimensions/ShowWindowDimensions'
import Canvas from './Canvases/Canvas';

function App() {
  return (
    <div className="App">
      <Canvas key = 'canvas'/>
      <ShowWindowDimensions/>
    </div>
  );
}

export default App;  