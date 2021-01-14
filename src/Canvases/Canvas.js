import React, { Component } from 'react'
import background from '../Assets/BG.jpg'
import table from '../Assets/Table/Table.png'
import door01 from '../Assets/Door/Door0001.png'
import door02 from '../Assets/Door/Door0002.png'
import rug01 from '../Assets/Rug/Rug0001.png'
import rug02 from '../Assets/Rug/Rug0002.png'
import lamp01 from '../Assets/Lamp/Lamp0001.png'
import lamp02 from '../Assets/Lamp/Lamp0002.png'
import lamp03 from '../Assets/Lamp/Lamp0003.png'
import dresser01 from '../Assets/Dresser/Dresser0001.png'
import dresser02 from '../Assets/Dresser/Dresser0002.png'
import toolBox01 from '../Assets/ToolBox/ToolBox0001.png'
import toolBox02 from '../Assets/ToolBox/ToolBox0002.png'
import cabinet from '../Assets/Cabinet/Cabinet.png'
import shelf from '../Assets/Shelf/Shelf.png'
import couch01 from '../Assets/Couch/Couch0001.png'
import couch02 from '../Assets/Couch/Couch0002.png'
import stool01 from '../Assets/Stool/Stool0001.png'
import trash from '../Assets/Trash/Trash.png'
import safe from '../Assets/Safe/Safe.png'
import picture from '../Assets/Picture/Picture0001.png'
import combinationLock01 from '../ExitLocks/CombinationLock/CombinationLock0001.png'
import combinationLock02 from '../ExitLocks/CombinationLock/CombinationLock0002.png'
import boltLock01 from '../ExitLocks/BoltLock/BoltLock0001.png'
import boltLock02 from '../ExitLocks/BoltLock/BoltLock0002.png'
import keyLock01 from '../ExitLocks/KeyLock/KeyLock0001.png'
import keyLock02 from '../ExitLocks/KeyLock/KeyLock0002.png'
import papers from '../Assets/TableStuff/Papers.png'
import book from '../Assets/TableStuff/Book.png'
import inventoryHolder from '../Inventory/InventoryHolder.png'


import StyleHelper from '../StyleHelper/StyleHelper'

import './Canvas.css'
class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currLeft: false,
      currRight: false,
      currUp: false,
      currDown: false,
      currDoor:door01,
      currLamp:lamp01,
      currRug:rug01,
      currStool:stool01,
      currDresser: dresser01,
      currToolBox:toolBox01,
      currCouch:couch01,
      currCombLock:combinationLock01,
      currBoltLock:boltLock01,
      currKeyLock:keyLock01,
      borders: {
        left: 590,
        right: 910,
        top: 123,
        bottom: 340
      }
    }
  }

  handleDresserClick = (event) => {
    event.preventDefault()
    let circle = this.refs.char
    let dresser = this.refs.dresser
    let touch = false
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(dresser.style.left)
    let obj2Y = parseInt(dresser.style.top)

    if (obj1X < obj2X + dresser.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + dresser.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }
    
    let { currDresser } = this.state
    if (currDresser === dresser01 && touch) {
      this.setState({ currDresser: currDresser = dresser02 })
    } else {
      if(touch)
      this.setState({ currDresser: currDresser = dresser01 })
    }
  }

  handleCouchClick = (event) => {
    event.preventDefault()
    let circle = this.refs.char
    let couch = this.refs.couch
    let touch = false
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(couch.style.left)
    let obj2Y = parseInt(couch.style.top)

    if (obj1X < obj2X + couch.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + couch.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }
    
    let { currCouch } = this.state
    if (currCouch === couch01 && touch) {
      this.setState({ currCouch: currCouch = couch02 })
    } else {
      if(touch)
      this.setState({ currCouch: currCouch = couch01 })
    }
  }
  handleDoorClick = (event) => {
    event.preventDefault()
    let circle = this.refs.char
    let door = this.refs.door
    let touch = false
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(door.style.left)
    let obj2Y = parseInt(door.style.top)

    if (obj1X < obj2X + door.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + door.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }
    
    let { currDoor } = this.state
    if (currDoor === door01 && touch) {
      this.setState({ currDoor: currDoor = door02 })
    } else {
      if(touch)
      this.setState({ currDoor: currDoor = door01 })
    }
  }
  handleRugClick = (event) => {
    event.preventDefault()
    let circle = this.refs.char
    let rug = this.refs.rug
    let touch = false
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(rug.style.left)
    let obj2Y = parseInt(rug.style.top)

    if (obj1X < obj2X + rug.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + rug.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }
    
    let { currRug } = this.state
    if (currRug === rug01 && touch) {
      this.setState({ currRug: currRug = rug02 })
    } else {
      if(touch)
      this.setState({ currRug: currRug = rug01 })
    }
  }
  handleLightClick = (event) => {
    event.preventDefault()
    let circle = this.refs.char
    let lamp = this.refs.lamp
    let touch = false
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(lamp.style.left)
    let obj2Y = parseInt(lamp.style.top)

    if (obj1X < obj2X + lamp.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + lamp.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }
    
    let { currLamp } = this.state
    if (currLamp === lamp01 && touch) {
      this.setState({ currLamp: currLamp = lamp02 })
    } else {
      if(touch)
      this.setState({ currLamp: currLamp = lamp01 })
    }
  }
  handleToolBoxClick = (event) => {
    event.preventDefault()
    let circle = this.refs.char
    let toolBox = this.refs.toolBox
    let touch = false
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(toolBox.style.left)
    let obj2Y = parseInt(toolBox.style.top)

    if (obj1X < obj2X + toolBox.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + toolBox.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }
    
    let { currToolBox } = this.state
    if (currToolBox === toolBox01 && touch) {
      this.setState({ currToolBox: currToolBox = toolBox02 })
    } else {
      if(touch)
      this.setState({ currToolBox: currToolBox = toolBox01 })
    }
  }
  handlePictureClick = (event) => {
    event.preventDefault()
    let circle = this.refs.char
    let picture = this.refs.picture
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2Y = parseInt(picture.style.top)
    console.log(parseInt(picture.style.top))
    if (obj1Y >= 260 && obj1X >= 916 && obj2Y < 300) {
      picture.style.top = 320 + 'px';
    } else {
      if(obj2Y >= 320)
      picture.style.top = 250 + 'px';
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      let circle = this.refs.char
      let moveSpeed = 8;
      if (this.state.currLeft) {
        let x = parseInt(circle.style.left)
        if (x > this.state.borders.left) {
          circle.style.left = x - moveSpeed + 'px';
        }
      } if (this.state.currRight) {
        let x = parseInt(circle.style.left)
        if (x < this.state.borders.right) {
          circle.style.left = x + moveSpeed + 'px';
        }
      } if (this.state.currUp) {
        let y = parseInt(circle.style.top)
        if (y > this.state.borders.top) {
          circle.style.top = y - moveSpeed + 'px';
        }
      } if (this.state.currDown) {
        let y = parseInt(circle.style.top)
        if (y < this.state.borders.bottom) {
          circle.style.top = y + moveSpeed + 'px';
        }
      }
    }, 30)
  }

  handleParams(params) {
    return
  }

  handleLeftDown = (event) => {
    let { currLeft } = this.state
    if (event.type === "mousedown") {
      this.setState({ currLeft: currLeft = true })
    }
    this.handleParams(currLeft)
  }
  handleLeftUp = (event) => {
    let { currLeft } = this.state
    if (event.type === "mouseup") {
      this.setState({ currLeft: currLeft = false })
    }
    this.handleParams(currLeft)
  }
  handleLeftOut = (event) => {
    let { currLeft } = this.state
    if (event.type === "mouseout") {
      this.setState({ currLeft: currLeft = false })
    }
    this.handleParams(currLeft)
  }

  handleRightDown = (event) => {
    let { currRight } = this.state
    if (event.type === "mousedown") {
      this.setState({ currRight: currRight = true })
    }
    this.handleParams(currRight)
  }
  handleRightUp = (event) => {
    let { currRight } = this.state
    if (event.type === "mouseup") {
      this.setState({ currRight: currRight = false })
    }
    this.handleParams(currRight)
  }
  handleRightOut = (event) => {
    let { currRight } = this.state
    if (event.type === "mouseout") {
      this.setState({ currRight: currRight = false })
    }
    this.handleParams(currRight)
  }

  handleUpDown = (event) => {
    let { currUp } = this.state
    if (event.type === "mousedown") {
      this.setState({ currUp: currUp = true })
    }
    this.handleParams(currUp)
  }
  handleUpUp = (event) => {
    let { currUp } = this.state
    if (event.type === "mouseup") {
      this.setState({ currUp: currUp = false })
    }
    this.handleParams(currUp)
  }
  handleUpOut = (event) => {
    let { currUp } = this.state
    if (event.type === "mouseout") {
      this.setState({ currUp: currUp = false })
    }
    this.handleParams(currUp)
  }

  handleDownDown = (event) => {
    let { currDown } = this.state
    if (event.type === "mousedown") {
      this.setState({ currDown: currDown = true })
    }
    this.handleParams(currDown)
  }
  handleDownUp = (event) => {
    let { currDown } = this.state
    if (event.type === "mouseup") {
      this.setState({ currDown: currDown = false })
    }
    this.handleParams(currDown)
  }
  handleDownOut = (event) => {
    let { currDown } = this.state
    if (event.type === "mouseout") {
      this.setState({ currDown: currDown = false })
    }
    this.handleParams(currDown)
  }

  render() {
    let { currDresser,currCouch,currDoor,currLamp,currRug,currToolBox,currStool,currCombLock,currBoltLock,currKeyLock } = this.state
    return (
      <div>
        {/* Canvas */}
        <canvas ref='canv' 
        className="canvas" 
        style={{ backgroundImage: `url(${background})` }} 
        width={640}
        height={425} 
         />
        {/* Door */}
        <img src={currDoor} 
        onClick={this.handleDoorClick}
        ref = "door" 
        id='door' 
        name='door' 
        style={StyleHelper.door} 
        alt='door' 
        />
        {/* CombinationLock */}
        <img src={currCombLock} 
        // onClick={this.handleDoorClick}
        ref = "combLock" 
        id='combLock' 
        name='combLock' 
        style={StyleHelper.combLock} 
        alt='combLock' 
        />
         {/* KeyLock */}
         <img src={currKeyLock} 
        // onClick={this.handleDoorClick}
        ref = "keyLock" 
        id='keyLock' 
        name='keyLock' 
        style={StyleHelper.keyLock} 
        alt='keyLock' 
        />
        {/* BoltLock */}
        <img src={currBoltLock} 
        // onClick={this.handleDoorClick}
        ref = "boltLock" 
        id='boltLock' 
        name='boltLock' 
        style={StyleHelper.boltLock} 
        alt='boltLock' 
        />
        {/* Rug */}
        <img src={currRug} 
        onClick={this.handleRugClick}
        ref = "rug" 
        id='rug' 
        name='rug' 
        style={StyleHelper.rug} 
        alt='rug' 
        />
        {/* Lamp */}
        <img src={currLamp} 
        onClick={this.handleLightClick}
        ref = "lamp" 
        id='lamp' 
        name='lamp' 
        style={StyleHelper.lamp} 
        alt='lamp' 
        />
        {/* Table */}
        <img src={table} 
        id='table' 
        name='table' 
        style={StyleHelper.table} 
        alt='table' 
        />
        {/* Papers */}
        <img src={papers} 
        ref = 'papers'
        id='papers' 
        name='papers' 
        style={StyleHelper.papers} 
        alt='papers' 
        />
        {/* Book */}
        <img src={book} 
        ref = 'book'
        id='book' 
        name='book' 
        style={StyleHelper.book} 
        alt='book' 
        />
        {/* Dresser */}
        <img src={currDresser} 
        onClick={this.handleDresserClick} 
        ref="dresser" 
        id='dresser' 
        name='dresser'
        style={StyleHelper.dresser} 
        alt='dresser' 
        />
        {/* Cabinet */}
        <img src={cabinet} 
        ref="cabinet" 
        id='cabinet' 
        name='cabinet'
        style={StyleHelper.cabinet} 
        alt='cabinet' 
        />
        {/* ToolBox */}
        <img src={currToolBox} 
        onClick={this.handleToolBoxClick}
        ref="toolBox" 
        id='toolBox' 
        name='toolBox'
        style={StyleHelper.toolBox} 
        alt='toolBox' 
        />
        {/* Shelf */}
        <img src={shelf} 
        ref = "shelf" 
        id='shelf' 
        name='shelf' 
        style={StyleHelper.shelf} 
        alt='shelf' 
        />
        {/* Couch */}
        <img src={currCouch} 
        onClick={this.handleCouchClick} 
        ref = "couch" 
        id='couch' 
        name='couch' 
        style={StyleHelper.couch} 
        alt='couch' 
        />
        {/* Stool */}
        <img src={currStool} 
        id='stool' 
        name='stool' 
        style={StyleHelper.stool} 
        alt='stool' 
        />
        {/* Trash */}
        <img src={trash} 
        id='trash' 
        name='trash' 
        style={StyleHelper.trash} 
        alt='trash' 
        />
        {/* Safe */}
        <img src={safe} 
        id='safe' 
        name='safe' 
        style={StyleHelper.safe} 
        alt='safe' 
        />
        {/* Picture */}
        <img src={picture} 
        onClick ={this.handlePictureClick}
        ref = 'picture'
        id='picture' 
        name='picture' 
        style={StyleHelper.picture} 
        alt='sunny day' 
        />
        {/* Character */}
        <div className="character" 
        id="character" 
        ref="char" 
        style={StyleHelper.redGuy}>
        </div>

        {/* Lights Out */}
        {(currLamp === lamp02||currLamp === lamp03?
        <div 
        style={{ 
          backgroundColor: '#000000',
          opacity:0.9,
          pointerEvents:'none',
          position:'absolute',
          width:640, 
          height:425 ,
          left:450,
          top:50
          }}>
          </div>:
          <div>
          </div>
          )}
        {(currLamp === lamp01?
        <div className="btnPanel">
          <button className="btn" 
          onMouseDown={this.handleUpDown} 
          onMouseUp={this.handleUpUp} 
          onMouseOut={this.handleUpOut} 
          style={StyleHelper.moveBtn}
          >Move Up
          </button>
          <br />
          <button className="btn" 
          onMouseDown={this.handleLeftDown} 
          onMouseUp={this.handleLeftUp} 
          onMouseOut={this.handleLeftOut} 
          style={StyleHelper.moveBtn}
          >Move Left
          </button>
          <button className="btn" 
          onMouseDown={this.handleDownDown} 
          onMouseUp={this.handleDownUp} 
          onMouseOut={this.handleDownOut} 
          style={StyleHelper.moveBtn}
          >Move Down
          </button>
          <button className="btn" 
          onMouseDown={this.handleRightDown} 
          onMouseUp={this.handleRightUp} 
          onMouseOut={this.handleRightOut} 
          style={StyleHelper.moveBtn}
          >Move Right
          </button>
          <br />
        </div>
        :
        <div className="btnPanel">
          <button className="btn" 
          style={StyleHelper.moveBtn}
          >TURN
          </button>
          <br />
          <button className="btn" 
          style={StyleHelper.moveBtn}
          >ON
          </button>
          <button className="btn" 
          style={StyleHelper.moveBtn}
          >THE
          </button>
          <button className="btn" 
          style={StyleHelper.moveBtn}
          >LIGHT
          </button>
          <br />
        </div>
        )}
        {/* Inventory */}
        <img src={inventoryHolder} 
        // onClick ={this.handlePictureClick}
        ref = 'inventoryHolder'
        id='inventoryHolder' 
        name='inventoryHolder' 
        style={StyleHelper.inventoryHolder} 
        alt='inventory' 
        />
      </div>
    )
  }
}
export default Canvas