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
import stool02 from '../Assets/Stool/Stool0002.png'
import trash from '../Assets/Trash/Trash.png'
import safe from '../Assets/Safe/Safe.png'
import picture from '../Assets/Picture/Picture0001.png'
import combinationLock01 from '../ExitLocks/CombinationLock/CombinationLock0001.png'
import combinationLock02 from '../ExitLocks/CombinationLock/CombinationLock0002.png'
import boltLock01 from '../ExitLocks/BoltLock/BoltLock0001.png'
import keyLock01 from '../ExitLocks/KeyLock/KeyLock0001.png'
import keyLock02 from '../ExitLocks/KeyLock/KeyLock0002.png'
import houseKey from '../Inventory/Key.png'
import papers from '../Assets/TableStuff/Papers.png'
import book from '../Assets/TableStuff/Book.png'
import screw01 from '../Inventory/Screw/Screw0001.png'
import screw02 from '../Inventory/Screw/Screw0002.png'
import screw03 from '../Inventory/Screw/Screw0003.png'
import screw04 from '../Inventory/Screw/Screw0004.png'
import glove01 from '../Inventory/Glove/Glove0001.png'
import glove02 from '../Inventory/Glove/Glove0002.png'
import crowBar from '../Inventory/CrowBar.png'
import bobbyPin01 from '../Inventory/BobPin/BobPin0001.png'
import bobbyPin02 from '../Inventory/BobPin/BobPin0002.png'
import screwDriver01 from '../Inventory/ScrewDriver/ScrewDriver0001.png'
import screwDriver02 from '../Inventory/ScrewDriver/ScrewDriver0002.png'
import bulb01 from '../Inventory/LightBulb/Bulb0001.png'
import bulb02 from '../Inventory/LightBulb/Bulb0002.png'
import hitBox from '../Assets/HitBox.png'
import inventoryHolder from '../Inventory/InventoryHolder.png'
import soundSFX from '../soundFileHelper/SoundFile'
import './Canvas.css'

class Canvas extends Component {
  constructor(props) {
    super(props)
    this.circleCursor = React.createRef();
    this.canv = React.createRef();
    this.char = React.createRef();
    this.door = React.createRef();
    this.dresser = React.createRef();
    this.couch = React.createRef();
    this.rug = React.createRef();
    this.lamp = React.createRef();
    this.table = React.createRef();
    this.picture = React.createRef();
    this.bobPin = React.createRef();
    this.stool = React.createRef();
    this.toolBox = React.createRef();
    this.hitBox1 = React.createRef();
    this.hitBox2 = React.createRef();
    this.timer = 0
    this.state = {
      gameStarted: false,
      time:{},
      seconds:5,
      currLeft: false,
      currRight: false,
      currUp: false,
      currDown: false,
      currDoor: door01,
      currLamp: lamp01,
      currRug: rug01,
      currStool: stool01,
      currDresser: dresser01,
      currToolBox: toolBox01,
      currCouch: couch01,
      currCombLock: combinationLock01,
      combUnlocked: false,
      currBoltLock: boltLock01,
      boltUnlocked: false,
      currKeyLock: keyLock01,
      keyUnlocked: false,
      toolBoxUnlock: false,
      infoMessage: null,
      itemsSelected: 0,
      safePuzzle: false,
      combinationPuzzle: false,
      safeAnswer: 0,
      safeAnswer2: 0,
      safeAnswer3: 0,
      safeAnswer4: 0,
      safeAnswer5: 0,
      screws: {
        currState: 0,
        selected: false,
        screw1: false,
        screw2: false,
        screw3: false,
        screw4: false
      },
      bobbyPin: {
        currState: 0,
        selected: false
      },
      bulb: {
        currState: 0,
        selected: false
      },
      glove: {
        currState: 0,
        selected: false,
      },
      crowBar: {
        currState: 0,
        selected: false
      },
      screwDriver: {
        currState: 0,
        selected: false
      },
      key: {
        currState: 0,
        selected: false
      },
      borders: {
        left: 590,
        right: 910,
        top: 123,
        bottom: 340
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const value = event.target.value
    this.setState({ ...this.state, [event.target.name]: value })
  }

  clearInfo = () => {
    let { infoMessage } = this.state
    this.setState({ infoMessage: infoMessage = null })
    this.handleParams(infoMessage)
  }
  handleIncrement = (id) => {
    let { safeAnswer, safeAnswer2, safeAnswer3, safeAnswer4, safeAnswer5 } = this.state
    if (id === 1) {
      if (safeAnswer < 9) {
        this.setState({ safeAnswer: safeAnswer += 1 })
      } else if (safeAnswer === 9) {
        this.setState({ safeAnswer: safeAnswer = 0 })
      }
    } else if (id === 2) {
      if (safeAnswer2 < 9) {
        this.setState({ safeAnswer2: safeAnswer2 += 1 })
      } else if (safeAnswer2 === 9) {
        this.setState({ safeAnswer2: safeAnswer2 = 0 })
      }
    } else if (id === 3) {
      if (safeAnswer3 < 9) {
        this.setState({ safeAnswer3: safeAnswer3 += 1 })
      } else if (safeAnswer3 === 9) {
        this.setState({ safeAnswer3: safeAnswer3 = 0 })
      }
    } else if (id === 4) {
      if (safeAnswer4 < 9) {
        this.setState({ safeAnswer4: safeAnswer4 += 1 })
      } else if (safeAnswer4 === 9) {
        this.setState({ safeAnswer4: safeAnswer4 = 0 })
      }
    } else if (id === 5) {
      if (safeAnswer5 < 9) {
        this.setState({ safeAnswer5: safeAnswer5 += 1 })
      } else if (safeAnswer5 === 9) {
        this.setState({ safeAnswer5: safeAnswer5 = 0 })
      }
    }
  }
  handleDecrement = (id) => {
    let { safeAnswer, safeAnswer2, safeAnswer3, safeAnswer4, safeAnswer5 } = this.state
    if (id === 1) {
      if (safeAnswer > 0) {
        this.setState({ safeAnswer: safeAnswer -= 1 })
      } else if (safeAnswer === 0) {
        this.setState({ safeAnswer: safeAnswer = 9 })
      }
    } else if (id === 2) {
      if (safeAnswer2 > 0) {
        this.setState({ safeAnswer2: safeAnswer2 -= 1 })
      } else if (safeAnswer2 === 0) {
        this.setState({ safeAnswer2: safeAnswer2 = 9 })
      }
    } else if (id === 3) {
      if (safeAnswer3 > 0) {
        this.setState({ safeAnswer3: safeAnswer3 -= 1 })
      } else if (safeAnswer3 === 0) {
        this.setState({ safeAnswer3: safeAnswer3 = 9 })
      }
    } else if (id === 4) {
      if (safeAnswer4 > 0) {
        this.setState({ safeAnswer4: safeAnswer4 -= 1 })
      } else if (safeAnswer4 === 0) {
        this.setState({ safeAnswer4: safeAnswer4 = 9 })
      }
    } else if (id === 5) {
      if (safeAnswer5 > 0) {
        this.setState({ safeAnswer5: safeAnswer5 -= 1 })
      } else if (safeAnswer5 === 0) {
        this.setState({ safeAnswer5: safeAnswer5 = 9 })
      }
    }
  }
  handleParams(params) {
    return
  }
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }
  componentDidMount() {
    let circleCursor = this.circleCursor.current
    const onMouseMove = (e) => {
      circleCursor.style.left = e.pageX + 'px';
      circleCursor.style.top = e.pageY + 'px';
    }
    window.addEventListener('mousemove', onMouseMove);
    this.intervalId = setInterval(() => {
      let {borders} = this.state
      let circle = this.char.current
      let moveSpeed = 8;
      let canvLeft
      if (this.props.screenWidth <= 1085) {
        canvLeft = 0
        this.setState({ left: borders.left = canvLeft + 140, right: borders.right = canvLeft + 460 })
      } else if (this.props.screenWidth > 1085 && this.props.screenWidth <= 1366) {
        canvLeft = 350
        this.setState({ left: borders.left = canvLeft + 140, right: borders.right = canvLeft + 460 })
      } else {
        canvLeft = 450
        this.setState({ left: borders.left = canvLeft + 140, right: borders.right = canvLeft + 460 })
      }
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


  //Object Clicks
  handleDresserClick = () => {
    let circle = this.char.current
    let dresser = this.dresser.current
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
      soundSFX.dresserSFX.play()
      this.setState({ currDresser: currDresser = dresser02 })
    } else {
      if (touch)
      soundSFX.dresserSFX.play()
        this.setState({ currDresser: currDresser = dresser01 })
    }
  }
  handleCouchClick = () => {
    let circle = this.char.current
    let couch = this.couch.current
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
    } else
      if (currCouch === couch02 && touch) {
        this.setState({ currCouch: currCouch = couch01 })
      }
  }
  handleDoorClick = () => {
    let circle = this.char.current
    let door = this.door.current
    let touch = false
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(door.style.left)
    let obj2Y = parseInt(door.style.top)

    if (obj1X < obj2X + door.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + door.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }

    let { currDoor, currKeyLock, boltUnlocked, combUnlocked } = this.state
    if (currDoor === door01 && touch && currKeyLock === keyLock02 && boltUnlocked && combUnlocked) {
      soundSFX.doorOpenSFX.play()
      this.setState({ currDoor: currDoor = door02 })
    }else
    if(currDoor === door01 && touch){
      if(currKeyLock !== keyLock02||!boltUnlocked||!combUnlocked)
      soundSFX.doorLockSFX.play()
    }
  }
  handleRugClick = () => {
    let circle = this.char.current
    let rug = this.rug.current
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
    } else
      if (touch) {
        this.setState({ currRug: currRug = rug01 })
      }
  }
  handleLightClick = () => {
    let circle = this.char.current
    let lamp = this.lamp.current
    let touch = false
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(lamp.style.left)
    let obj2Y = parseInt(lamp.style.top)

    if (obj1X < obj2X + lamp.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + lamp.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }

    let { currLamp, glove, bulb, itemsSelected } = this.state
    if (currLamp === lamp01 && touch) {
      soundSFX.lightSFX.play()
      this.setState({ currLamp: currLamp = lamp02 })
    } else
      if (currLamp === lamp02 && touch && !glove.selected) {
        soundSFX.lightSFX.play()
        this.setState({ currLamp: currLamp = lamp01 })
      } else
        if (currLamp === lamp02 && touch && glove.selected) {
          this.setState({
            currLamp: currLamp = lamp03,
            bulbState: bulb.currState += 1
          })
        } else if (currLamp === lamp03 && touch && glove.selected && glove.currState === 2) {
          soundSFX.lightSFX.play()
          this.setState({
            currLamp: currLamp = lamp01,
            bulbState: bulb.currState = 0,
            gloveSelected: glove.selected = false,
            gloveState: glove.currState -= 1,
            itemsSelected: itemsSelected -= 1
          })
        }
  }
  handleToolBoxClick = () => {
    let circle = this.char.current
    let toolBox = this.toolBox.current
    let touch = false
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(toolBox.style.left)
    let obj2Y = parseInt(toolBox.style.top)

    if (obj1X < obj2X + toolBox.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + toolBox.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }

    let { currToolBox, infoMessage, toolBoxUnlock, crowBar, itemsSelected } = this.state
    let text = [
      <br key='0' />,
      <br key='1' />,
      <br key='2' />,
      `It's Stuck!!!`
    ]

    if (currToolBox === toolBox01 && touch && crowBar.selected) {
      soundSFX.boltSFX.play()
      this.setState({
        currToolBox: currToolBox = toolBox02,
        toolBox: toolBoxUnlock = true,
        newBar: crowBar.selected = false,
        itemsSelected: itemsSelected -= 1
      })
      this.handleParams(currToolBox)
    } else
      if (currToolBox === toolBox01 && touch && !this.state.crowBar.selected && !toolBoxUnlock) {
        soundSFX.doorLockSFX.play()
        this.setState({ infoMessage: infoMessage = text })
        this.handleParams(infoMessage)
      }
      else
        if (currToolBox === toolBox01 && touch) {
          this.setState({ currToolBox: currToolBox = toolBox02 })
          this.handleParams(currToolBox)
        } else
          if (currToolBox === toolBox02 && touch) {
            this.setState({ currToolBox: currToolBox = toolBox01 })
            this.handleParams(currToolBox)
          }
  }
  handlePictureClick = () => {
    let touch = false
    let circle = this.char.current
    let hitBox = this.hitBox1.current
    let pic = this.picture.current
    let picY = parseInt(pic.style.top)

    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(hitBox.style.left)
    let obj2Y = parseInt(hitBox.style.top)

    if (obj1X < obj2X + hitBox.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + hitBox.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }

    if (touch && picY < 300) {
      soundSFX.couchSFX.play()
      pic.style.top = 320 + 'px';
    } else
      if (touch && picY >= 320) {
        soundSFX.couchSFX.play()
        pic.style.top = 250 + 'px';
      }
  }
  handlePaperClick = () => {
    let circle = this.char.current
    let tableB = this.table.current
    let touch
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(tableB.style.left)
    let obj2Y = parseInt(tableB.style.top)

    if (obj1X < obj2X + tableB.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + tableB.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }

    let { infoMessage } = this.state
    let text
    if (touch && infoMessage === null) {
      text = [
        <br key='0' />,
        'It was a nice and sunny day,',
        <br key='1' />,
        'So a bright idea was along the way,',
        <br key='2' />,
        'but thats too bad for I have bolts for brains.'
      ]
      this.setState({ infoMessage: infoMessage = text })
    } else
      if (touch && infoMessage) {
        text = [
          <br key='0' />,
          'Binary Conversion',
          <br key='1' />,
          <br key='2' />,
          <br key='3' />,
          '256 128 64 32 16 8 4']
        this.setState({ infoMessage: infoMessage = text })
      }
  }
  handleBookClick = () => {
    let circle = this.char.current
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let tableB = this.table.current
    let touch
    let obj2X = parseInt(tableB.style.left)
    let obj2Y = parseInt(tableB.style.top)

    if (obj1X < obj2X + tableB.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + tableB.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }
    let { infoMessage } = this.state
    let text = [
      <br key='0' />,
      <br key='1' />,
      <br key='2' />,
      'FOO'
    ]
    if (touch && infoMessage === null) {
      this.setState({ infoMessage: infoMessage = text })
    }
  }
  handleTrashClick = () => {
    let touch
    let circle = this.char.current
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let hitBox = this.hitBox1.current
    let obj2X = parseInt(hitBox.style.left)
    let obj2Y = parseInt(hitBox.style.top)

    if (obj1X < obj2X + hitBox.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + hitBox.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }
    let { infoMessage } = this.state
    let text = [
      <br key='0' />,
      <br key='1' />,
      <br key='2' />,
      `Ummm I don't think I want to put my hand in there!`
    ]
    if (touch && infoMessage === null) {
      this.setState({ infoMessage: infoMessage = text })
    }
  }
  handleStoolClick = () => {
    let circle = this.char.current
    let stool = this.stool.current
    let touch = false
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(stool.style.left)
    let obj2Y = parseInt(stool.style.top)

    if (obj1X < obj2X + stool.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + stool.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }

    let { currStool, infoMessage, screwDriver, itemsSelected } = this.state
    if (currStool === stool01 && touch && this.state.screwDriver.selected && this.state.screwDriver.currState === 2) {
      this.setState({
        currStool: currStool = stool02,
        itemsSelected: itemsSelected = 0,
        screwDriverSelected: screwDriver.selected = false,
        screwDriverState: screwDriver.currState = 1,
      })
      this.handleParams(itemsSelected)
    } else
      if (currStool === stool01 && touch && !this.state.screwDriver.selected) {
        let text = [
          <br key='0' />,
          <br key='1' />,
          <br key='2' />,
          `This thing is broken!`
        ]
        this.setState({ infoMessage: infoMessage = text })
        this.handleParams(infoMessage)
      }
  }
  handleSafeClick = () => {
    let { safePuzzle } = this.state
    let touch = false
    let circle = this.char.current
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let hitBox = this.hitBox1.current
    let obj2X = parseInt(hitBox.style.left)
    let obj2Y = parseInt(hitBox.style.top)

    if (obj1X < obj2X + hitBox.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + hitBox.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }

    if (touch) {
      this.setState({ safePuzzle: safePuzzle = !safePuzzle })
    }
  }
  handleCombLockClick = () => {
    let circle = this.char.current
    let door = this.door.current
    let touch = false
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(door.style.left)
    let obj2Y = parseInt(door.style.top)

    if (obj1X < obj2X + door.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + door.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }

    let { currCombLock, combinationPuzzle, safeAnswer, safeAnswer2, safeAnswer3, safeAnswer4, safeAnswer5 } = this.state
    if (currCombLock === combinationLock01 && touch && !combinationPuzzle) {
      this.setState({
        safeAnswer: safeAnswer = 0,
        safeAnswer2: safeAnswer2 = 0,
        safeAnswer3: safeAnswer3 = 0,
        safeAnswer4: safeAnswer4 = 0,
        safeAnswer5: safeAnswer5 = 0,
        combinationPuzzle: combinationPuzzle = true
      })
      this.handleParams(safeAnswer, safeAnswer2, safeAnswer3, safeAnswer4, safeAnswer5)
    } else if (currCombLock === combinationLock01 && touch && combinationPuzzle) {
      this.setState({
        combinationPuzzle: combinationPuzzle = false
      })
    }
  }
  handleBoltLockClick = () => {
    let circle = this.char.current
    let door = this.door.current
    let touch = false
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(door.style.left)
    let obj2Y = parseInt(door.style.top)

    if (obj1X < obj2X + door.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + door.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }

    let { currBoltLock, bobbyPin, itemsSelected, infoMessage, boltUnlocked } = this.state
    let text
    if (currBoltLock === boltLock01 && touch && bobbyPin.selected && bobbyPin.currState === 1) {
      text = [
        <br key='0' />,
        <br key='1' />,
        'I need to find a way to get this bobby pin',
        <br key='2' />,
        'to fit inside this lock!'
      ]
      this.setState({ infoMessage: infoMessage = text })
    } else
      if (currBoltLock === boltLock01 && touch && bobbyPin.selected && bobbyPin.currState === 2) {
        soundSFX.boltSFX.play()
        this.setState({
          boltUnlocked: boltUnlocked = true,
          bobbyPinSelected: bobbyPin.selected = false,
          itemsSelected: itemsSelected = 0
        })
      } else
        if (currBoltLock === boltLock01 && touch) {
          text = [
            <br key='0' />,
            <br key='1' />,
            <br key='2' />,
            'I need something to fit in here and turn this lock!'
          ]
          this.setState({ infoMessage: infoMessage = text })
        }
    this.handleParams(currBoltLock, bobbyPin, itemsSelected, infoMessage, boltUnlocked)
  }
  handleKeyLockClick = () => {
    let circle = this.char.current
    let door = this.door.current
    let touch = false
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(door.style.left)
    let obj2Y = parseInt(door.style.top)

    if (obj1X < obj2X + door.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + door.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }

    let { currKeyLock, itemsSelected, infoMessage, keyUnlocked, key } = this.state
    let text
    if (currKeyLock === keyLock01 && touch && !key.selected) {
      soundSFX.doorLockSFX.play()
      text = [
        <br key='0' />,
        <br key='1' />,
        <br key='2' />,
        `It's locked! I Need a Key!`,
      ]
      this.setState({ infoMessage: infoMessage = text })
    } else
      if (currKeyLock === keyLock01 && touch && key.selected) {
        soundSFX.boltSFX.play()
        this.setState({
          keyUnlocked: keyUnlocked = true,
          currKeyLock: currKeyLock = keyLock02,
          keySelected: key.selected = false,
          keyState: key.currState = 0,
          itemsSelected: itemsSelected = 0
        })
      }
    this.handleParams(currKeyLock, itemsSelected, infoMessage, keyUnlocked, key)
  }


  //Inventory Item Clicks
  handleInventoryClick = (id) => {
    let { itemsSelected, screws, bobbyPin, bulb, glove, screwDriver, crowBar, key } = this.state
    if (id === 'screws') {
      if (!this.state.screws.selected && itemsSelected === 0) {
        this.setState({
          itemsSelected: itemsSelected += 1,
          screwsSelected: screws.selected = true
        })
      } else if (!screws.selected && screwDriver.selected && screws.currState === 4 && screwDriver.currState === 1) {
        this.setState({
          itemsSelected: itemsSelected = 0,
          screwDriverSelected: screwDriver.selected = false,
          screwDriverState: screwDriver.currState += 1,
          screwsState: screws.currState = 0
        })
      } else if (screws.selected) {
        this.setState({
          itemsSelected: itemsSelected -= 1,
          screwsSelected: screws.selected = false
        })
      }
    } else
      if (id === 'bobbyPin') {
        if (!this.state.bobbyPin.selected && itemsSelected === 0) {
          this.setState({
            itemsSelected: itemsSelected += 1,
            bobbyPinSelected: bobbyPin.selected = true
          })
        } else if (!bobbyPin.selected && glove.selected && glove.currState === 2 && bobbyPin.currState === 1) {
          this.setState({
            itemsSelected: itemsSelected -= 1,
            bobbyPinState: bobbyPin.currState += 1,
            bulbState: bulb.currState += 2,
            gloveState: glove.currState -= 1,
            gloveSelected: glove.selected = false,
            bobbyPinSelected: bobbyPin.selected = false
          })
        } else if (bobbyPin.selected) {
          this.setState({
            itemsSelected: itemsSelected -= 1,
            bobbyPinSelected: bobbyPin.selected = false
          })
        }
      } else
        if (id === 'bulb') {
          if (!this.state.bulb.selected && itemsSelected === 0) {
            this.setState({
              itemsSelected: itemsSelected += 1,
              bulbSelected: bulb.selected = true
            })
          } else if (!bulb.selected && glove.selected && bulb.currState === 1) {
            this.setState({
              itemsSelected: itemsSelected = 0,
              bulbState: bulb.currState -= 1,
              gloveState: glove.currState += 1,
              gloveSelected: glove.selected = false
            })
          } else if (!bulb.selected && glove.selected && bulb.currState === 2) {
            this.setState({
              itemsSelected: itemsSelected = 0,
              bulbState: bulb.currState = 0,
              gloveState: glove.currState += 1,
              gloveSelected: glove.selected = false
            })
          } else if (bulb.selected) {
            this.setState({
              itemsSelected: itemsSelected -= 1,
              bulbSelected: bulb.selected = false
            })
          }
        } else
          if (id === 'glove') {
            if (!this.state.glove.selected && itemsSelected === 0) {
              this.setState({
                itemsSelected: itemsSelected += 1,
                gloveSelected: glove.selected = true
              })
            } else if (glove.selected) {
              this.setState({
                itemsSelected: itemsSelected -= 1,
                gloveSelected: glove.selected = false
              })
            }
          } else
            if (id === 'crowBar') {
              if (!this.state.crowBar.selected && itemsSelected === 0) {
                this.setState({
                  itemsSelected: itemsSelected += 1,
                  crowBarSelected: crowBar.selected = true
                })
              } else if (crowBar.selected) {
                this.setState({
                  itemsSelected: itemsSelected -= 1,
                  crowBarSelected: crowBar.selected = false
                })
              }
            } else
              if (id === 'screwDriver') {
                if (!this.state.screwDriver.selected && itemsSelected === 0) {
                  this.setState({
                    itemsSelected: itemsSelected += 1,
                    screwDriverSelected: screwDriver.selected = true
                  })
                } else if (!screwDriver.selected && screws.selected && screws.currState === 4 && screwDriver.currState === 1) {
                  this.setState({
                    itemsSelected: itemsSelected = 0,
                    screwsSelected: screws.selected = false,
                    screwDriverState: screwDriver.currState += 1,
                    screwsState: screws.currState = 0
                  })
                } else if (screwDriver.selected) {
                  this.setState({
                    itemsSelected: itemsSelected -= 1,
                    screwDriverSelected: screwDriver.selected = false
                  })
                }
              } else
                if (id === 'key') {
                  if (!this.state.key.selected && itemsSelected === 0) {
                    this.setState({
                      itemsSelected: itemsSelected += 1,
                      keySelected: key.selected = true
                    })
                  } else if (key.selected) {
                    this.setState({
                      itemsSelected: itemsSelected -= 1,
                      keySelected: key.selected = false
                    })
                  }
                }
  }
  handleScrewClick = (id) => {
    let circle = this.char.current
    let touch = false
    let hitBox = this.hitBox2.current
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(hitBox.style.left)
    let obj2Y = parseInt(hitBox.style.top)
    let { screws } = this.state


    if (obj1X < obj2X + hitBox.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + hitBox.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }

    if (id === "screw1") {
      this.setState({ screwState1: screws.currState += 1, screwState2: screws.screw1 = true })
    } else
      if (id === "screw2" && touch) {
        this.setState({ screwState1: screws.currState += 1, screwState2: screws.screw2 = true })
      } else
        if (id === "screw3") {
          this.setState({ screwState1: screws.currState += 1, screwState2: screws.screw3 = true })
        } else
          if (id === "screw4") {
            this.setState({ screwState1: screws.currState += 1, screwState2: screws.screw4 = true })
          }
  }
  handleGloveClick = () => {
    let { infoMessage, glove } = this.state
    let circle = this.char.current
    let stool = this.stool.current
    let touch
    let text
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(stool.style.left)
    let obj2Y = parseInt(stool.style.top)

    if (obj1X < obj2X + stool.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + stool.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }

    if (this.state.currStool === stool01 && touch) {
      text = [
        <br key='0' />,
        <br key='1' />,
        <br key='2' />,
        `If this stool wasn't broken, I could use it to get that glove!`
      ]
      this.setState({ infoMessage: infoMessage = text })
      this.handleParams(infoMessage)
    } else if (this.state.currStool === stool02 && touch) {
      this.setState({ gloveState: glove.currState += 1 })
      this.handleParams(glove)
    }
  }
  handleCrowBarClick = () => {
    let { crowBar } = this.state
    let touch
    let circle = this.char.current
    let hitBox = this.hitBox1.current
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(hitBox.style.left)
    let obj2Y = parseInt(hitBox.style.top)

    if (obj1X < obj2X + hitBox.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + hitBox.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }
    if (touch) {
      this.setState({ crowBarState: crowBar.currState += 1 })
    }
  }
  handleScrewDriverClick = () => {
    let circle = this.char.current
    let toolBox = this.toolBox.current
    let touch = false
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(toolBox.style.left)
    let obj2Y = parseInt(toolBox.style.top)

    if (obj1X < obj2X + toolBox.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + toolBox.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }

    let { screwDriver } = this.state

    if (touch) {
      this.setState({ newScrewDriver: screwDriver.currState += 1 })
    }
  }
  handleBobbyPinClick = () => {
    let circle = this.char.current
    let bobPin = this.bobPin.current
    let touch = false
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2X = parseInt(bobPin.style.left)
    let obj2Y = parseInt(bobPin.style.top)

    if (obj1X < obj2X + bobPin.width && obj1X + parseInt(circle.style.width) > obj2X &&
      obj1Y < obj2Y + bobPin.height && obj1Y + parseInt(circle.style.height) > obj2Y) {
      touch = true
    }

    let { bobbyPin } = this.state
    if (touch) {
      this.setState({ bobbyPinState: bobbyPin.currState += 1 })
    }
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

  handleNoMove =()=>{
    let {infoMessage} = this.state
    let text = [
      <br key="0" />,
      <br key="1" />,
      <br key="2" />,
      `Turn On The Light, I can't see where I'm walking!`]
    this.setState({
      infoMessage: infoMessage = text
  })
  this.handleParams(infoMessage)
}

  renderInventory = () => {
    let canvLeft
    if (this.props.screenWidth <= 1085) {
      canvLeft = 0
    } else if (this.props.screenWidth > 1085 && this.props.screenWidth <= 1366) {
      canvLeft = 350
    } else {
      canvLeft = 450
    }
    return (
      <div>
        {/* Inventory */}
        <img src={inventoryHolder}
          id='inventoryHolder'
          name='inventoryHolder'
          style={{
            position: 'absolute',
            top: 420,
            left: canvLeft + 10
          }}
          alt='inventory'
        />
        {/* Screw_Inventory */}
        {(this.state.screws.currState === 0 ?
          null
          : this.state.screws.currState === 1 ?
            <img src={screw01}
              onClick={() => this.handleInventoryClick('screws')}
              id='screw_inventory'
              name='screw_inventory'
              style={{
                position: 'absolute',
                top: 433,
                left: canvLeft + 26
              }}
              alt='screw_inventory'
            /> :
            this.state.screws.currState === 2 ?
              <img src={screw02}
                onClick={() => this.handleInventoryClick('screws')}
                id='screw_inventory'
                name='screw_inventory'
                style={{
                  position: 'absolute',
                  top: 433,
                  left: canvLeft + 26
                }}
                alt='screw_inventory'
              /> :
              this.state.screws.currState === 3 ?
                <img src={screw03}
                  onClick={() => this.handleInventoryClick('screws')}
                  id='screw_inventory'
                  name='screw_inventory'
                  style={{
                    position: 'absolute',
                    top: 433,
                    left: canvLeft + 26
                  }}
                  alt='screw_inventory'
                /> :
                this.state.screws.currState === 4 ?
                  <img src={screw04}
                    onClick={() => this.handleInventoryClick('screws')}
                    id='screw_inventory'
                    name='screw_inventory'
                    style={{
                      position: 'absolute',
                      top: 433,
                      left: canvLeft + 26
                    }}
                    alt='screw_inventory'
                  /> : null)}

        {/* BobbyPin_Inventory */}
        {(this.state.bobbyPin.currState === 0 ?
          null
          : this.state.bobbyPin.currState === 1 ?
            <img src={bobbyPin01}
              onClick={() => this.handleInventoryClick('bobbyPin')}
              id='bobbyPin_inventory'
              name='bobbyPin_inventory'
              style={{
                position: 'absolute',
                top: 433,
                left: canvLeft + 68,
                width: 16,
                height: 16
              }}
              alt='bobbyPin_inventory'
            /> :
            this.state.bobbyPin.currState === 2 ?
              <img src={bobbyPin02}
                onClick={() => this.handleInventoryClick('bobbyPin')}
                id='bobbyPin_inventory'
                name='bobbyPin_inventory'
                style={{
                  position: 'absolute',
                  top: 433,
                  left: canvLeft + 68,
                  width: 16,
                  height: 16
                }}
                alt='bobbyPin_inventory'
              /> : null)}
        {/* Bulb_Inventory */}
        {(this.state.bulb.currState === 0 ?
          null
          : this.state.bulb.currState === 1 ?
            <img src={bulb01}
              onClick={() => this.handleInventoryClick('bulb')}
              id='bulb_inventory'
              name='bulb_inventory'
              style={{
                position: 'absolute',
                top: 427,
                left: canvLeft + 107,
              }}
              alt='bulb_inventory'
            /> :
            this.state.bulb.currState === 2 ?
              <img src={bulb02}
                onClick={() => this.handleInventoryClick('bulb')}
                id='bulb_inventory'
                name='bulb_inventory'
                style={{
                  position: 'absolute',
                  top: 427,
                  left: canvLeft + 107,
                }}
                alt='bulb_inventory'
              /> : null)}
        {/* Glove_Inventory */}
        {(this.state.glove.currState === 0 ?
          null
          : this.state.glove.currState === 1 ?
            <img src={glove01}
              onClick={() => this.handleInventoryClick('glove')}
              id='glove_inventory'
              name='glove_inventory'
              style={{
                position : 'absolute',
                top: 430,
                left:canvLeft+142,
            }}
              alt='glove_inventory'
            /> :
            this.state.glove.currState === 2 ?
              <img src={glove02}
                onClick={() => this.handleInventoryClick('glove')}
                id='glove_inventory'
                name='glove_inventory'
                style={{
                  position : 'absolute',
                  top: 430,
                  left:canvLeft+142,
              }}
                alt='glove_inventory'
              /> : null)}
        {/* CrowBar_Inventory */}
        {(this.state.crowBar.currState === 0 ?
          null
          : this.state.crowBar.currState === 1 ?
            <img src={crowBar}
              onClick={() => this.handleInventoryClick('crowBar')}
              id='crowBar_inventory'
              name='crowBar_inventory'
              style={{
                position : 'absolute',
                top: 427,
                left:canvLeft+190,
            }}
              alt='crowBar_inventory'
            /> : null)}
        {/* ScrewDriver_Inventory */}
        {(this.state.screwDriver.currState === 0 ?
          null
          : this.state.screwDriver.currState === 1 ?
            <img src={screwDriver01}
              onClick={() => this.handleInventoryClick('screwDriver')}
              id='screwDriver_inventory'
              name='screwDriver_inventory'
              style={{
                position : 'absolute',
                top: 437,
                left:canvLeft+217,
            }}
              alt='screwDriver_inventory'
            /> :
            this.state.screwDriver.currState === 2 ?
              <img src={screwDriver02}
                onClick={() => this.handleInventoryClick('screwDriver')}
                id='screwDriver_inventory'
                name='screwDriver_inventory'
                style={{
                  position : 'absolute',
                  top: 437,
                  left:canvLeft+217,
              }}
                alt='screwDriver_inventory'
              /> : null)}
        {/* Key_Inventory */}
        {(this.state.key.currState === 0 ?
          null
          : this.state.key.currState === 1 ?
            <img src={houseKey}
              onClick={() => this.handleInventoryClick('key')}
              id='key_inventory'
              name='key_inventory'
              style={{
                position : 'absolute',
                top: 432,
                left:canvLeft+267,
            }}
              alt='key_inventory'
            /> : null)}

        {(this.state.screws.selected === true ? <div style={{
          top: 425,
          left: canvLeft+18,
          height: 28,
          width: 33,
          position: 'absolute',
          pointerEvents: 'none',
          borderRadius: 3,
          borderColor: 'red',
          borderStyle: 'solid',
          borderWidth: 2
        }}></div> : null)}
        {(this.state.bobbyPin.selected === true ? <div style={{
          top: 425,
          left: canvLeft+58,
          height: 28,
          width: 33,
          position: 'absolute',
          pointerEvents: 'none',
          borderRadius: 3,
          borderColor: 'red',
          borderStyle: 'solid',
          borderWidth: 2
        }}></div> : null)}
        {(this.state.bulb.selected === true ? <div style={{
          top: 425,
          left: canvLeft+97,
          height: 28,
          width: 33,
          position: 'absolute',
          pointerEvents: 'none',
          borderRadius: 3,
          borderColor: 'red',
          borderStyle: 'solid',
          borderWidth: 2
        }}></div> : null)}
        {(this.state.glove.selected === true ? <div style={{
          top: 425,
          left: canvLeft+136,
          height: 28,
          width: 33,
          position: 'absolute',
          pointerEvents: 'none',
          borderRadius: 3,
          borderColor: 'red',
          borderStyle: 'solid',
          borderWidth: 2
        }}></div> : null)}
        {(this.state.crowBar.selected === true ? <div style={{
          top: 425,
          left: canvLeft+175,
          height: 28,
          width: 33,
          position: 'absolute',
          pointerEvents: 'none',
          borderRadius: 3,
          borderColor: 'red',
          borderStyle: 'solid',
          borderWidth: 2
        }}></div> : null)}
        {(this.state.screwDriver.selected === true ? <div style={{
          top: 425,
          left: canvLeft+214,
          height: 28,
          width: 33,
          position: 'absolute',
          pointerEvents: 'none',
          borderRadius: 3,
          borderColor: 'red',
          borderStyle: 'solid',
          borderWidth: 2
        }}></div> : null)}
        {(this.state.key.selected === true ? <div style={{
          top: 425,
          left: canvLeft+253,
          height: 28,
          width: 33,
          position: 'absolute',
          pointerEvents: 'none',
          borderRadius: 3,
          borderColor: 'red',
          borderStyle: 'solid',
          borderWidth: 2
        }}></div> : null)}
      </div>
    )
  }
  renderComponents = () => {
    let canvLeft
    if (this.props.screenWidth <= 1085) {
      canvLeft = 0
    } else if (this.props.screenWidth > 1085 && this.props.screenWidth <= 1366) {
      canvLeft = 350
    } else {
      canvLeft = 450
    }
    let { currDresser, currCouch, currDoor, currLamp, currRug, currToolBox, currStool, currCombLock, currBoltLock, currKeyLock } = this.state
    
    return (
      <div>
        {/* Canvas */}
        <canvas ref={this.canv}
          style={{ backgroundImage: `url(${background})`, position: 'absolute', left: canvLeft, top: 50 }}
          width={640}
          height={425}
        />
        {/* Door */}
        <img src={currDoor}
          onClick={this.handleDoorClick}
          ref={this.door}
          id='door'
          name='door'
          style={{
            position: 'absolute',
            top: 56,
            left: canvLeft + 270
          }}
          alt='door'
        />

        {/* CombinationLock */}
        {(this.state.currDoor !== door02 ? <img src={currCombLock}
          onClick={this.handleCombLockClick}
          id='combLock'
          name='combLock'
          style={{
            position : 'absolute',
            top: 90,
            left:canvLeft+346
        }}
          alt='combLock'
        /> : null)}

        {/* KeyLock */}
        {(this.state.currDoor !== door02 ? <img src={currKeyLock}
          onClick={this.handleKeyLockClick}
          id='keyLock'
          name='keyLock'
          style={{
            position : 'absolute',
            top: 105,
            left:canvLeft+344
        }}
          alt='keyLock'
        /> : null)}

        {/* BoltLock */}
        {(!this.state.boltUnlocked ? <img src={currBoltLock}
          onClick={this.handleBoltLockClick}
          id='boltLock'
          name='boltLock'
          style={{
            position : 'absolute',
            top: 105,
            left:canvLeft+346
        }}
          alt='boltLock'
        /> : null)}

        {/* Rug */}
        <img src={currRug}
          onClick={this.handleRugClick}
          ref={this.rug}
          id='rug'
          name='rug'
          style={{
            position: 'absolute',
            top: 122,
            left: canvLeft + 255
          }}
          alt='rug'
        />

        {/* Screw(Rug) */}
        {(this.state.currRug === rug02 && !this.state.screws.screw1 ?
          <img src={screw01}
            onClick={() => this.handleScrewClick('screw1')}
            id='screw1'
            name='screw1'
            style={{
              position: 'absolute',
              top: 120,
              left: canvLeft + 378
            }}
            alt='screw1'
          /> : null)}

        {/* Lamp */}
        <img src={currLamp}
          onClick={this.handleLightClick}
          ref={this.lamp}
          id='lamp'
          name='lamp'
          style={{
            position: 'absolute',
            top: 75,
            left: canvLeft + 160
          }}
          alt='lamp'
        />

        {/* Table */}
        <img src={table}
          ref={this.table}
          id='table'
          name='table'
          style={{
            position: 'absolute',
            top: 330,
            left: canvLeft + 410
          }}
          alt='tableWithItems'
        />

        {/* BobbyPin */}
        {(this.state.bobbyPin.currState === 0 ? <img src={bobbyPin01}
          onClick={this.handleBobbyPinClick}
          ref={this.bobPin}
          id='bobPin'
          name='bobPin'
          style={{
            position: 'absolute',
            top: 350,
            left: canvLeft + 440
          }}
          alt='bobPin'
        /> : null)}

        {/* Papers */}
        <img src={papers}
          onClick={this.handlePaperClick}
          id='papers'
          name='papers'
          style={{
            position: 'absolute',
            top: 355,
            left: canvLeft + 480
          }}
          alt='papers'
        />

        {/* Book */}
        <img src={book}
          onClick={this.handleBookClick}
          id='book'
          name='book'
          style={{
            position: 'absolute',
            top: 350,
            left: canvLeft + 540
          }}
          alt='book'
        />
        {/* HitBox */}
        <img src={hitBox}
          ref={this.hitBox2}
          id='hitBox2'
          name='hitBox2'
          style={{
            position: 'absolute',
            top: 122,
            left: canvLeft + 420
          }}
          alt='HitBox'
        />
        {/* Dresser */}
        <img src={currDresser}
          onClick={this.handleDresserClick}
          ref={this.dresser}
          id='dresser'
          name='dresser'
          style={{
            position: 'absolute',
            top: 90,
            left: canvLeft + 470
          }}
          alt='dresser'
        />

        {/* Screw(Dresser) */}
        {(this.state.currDresser === dresser02 && !this.state.screws.screw3 ? <img src={screw01}
          onClick={() => this.handleScrewClick('screw3')}
          id='screw3'
          name='screw3'
          style={{
            position: 'absolute',
            top: 180,
            left: canvLeft + 485
          }}
          alt='screw3'
        /> : null)
        }

        {/* Cabinet */}
        <img src={cabinet}
          id='cabinet'
          name='cabinet'
          style={{
            position: 'absolute',
            top: 370,
            left: canvLeft + 310
          }}
          alt='cabinet'
        />

        {/* ToolBox */}
        <img src={currToolBox}
          onClick={this.handleToolBoxClick}
          ref={this.toolBox}
          id='toolBox'
          name='toolBox'
          style={{
            position: 'absolute',
            top: 362,
            left: canvLeft + 325
          }}
          alt='toolBox'
        />

        {/* ScrewDriver */}
        {(this.state.currToolBox === toolBox02 && this.state.screwDriver.currState === 0 ?
          <img src={screwDriver01}
            onClick={this.handleScrewDriverClick}
            id='screwDriver'
            name='screwDriver'
            style={{
              position: 'absolute',
              top: 365,
              left: canvLeft + 335
            }}
            alt='screwDriver'
          /> : null)}

        {/* Shelf */}
        <img src={shelf}
          id='shelf'
          name='shelf'
          style={{
            position: 'absolute',
            top: 80,
            left: canvLeft + 45
          }}
          alt='shelf'
        />

        {/* Glove */}
        {(this.state.glove.currState === 0 ? <img src={glove01}
          onClick={this.handleGloveClick}
          id='glove1'
          name='glove1'
          style={{
            position: 'absolute',
            top: 230,
            left: canvLeft + 68
          }}
          alt='glove1'
        /> : null)}

        {/* Couch */}
        <img src={currCouch}
          onClick={this.handleCouchClick}
          ref={this.couch}
          id='couch'
          name='couch'
          style={{
            position: 'absolute',
            top: 305,
            left: canvLeft + 95
          }}
          alt='couch'
        />

        {/* Screw(Couch) */}
        {(this.state.currCouch === couch02 && !this.state.screws.screw4 ? <img src={screw01}
          onClick={() => this.handleScrewClick('screw4')}
          id='screw4'
          name='screw4'
          style={{
            position: 'absolute',
            top: 380,
            left: canvLeft + 100
          }}
          alt='screw4'
        /> : null)}

        {/* Screw(Window) */}
        {(!this.state.screws.screw2 ? <img src={screw01}
          onClick={() => this.handleScrewClick('screw2')}
          id='screw2'
          name='screw2'
          style={{
            position: 'absolute',
            top: 95,
            left: canvLeft + 440
          }}
          alt='screw2'
        /> : null)}
        {/* Stool */}
        <img src={currStool}
          onClick={this.handleStoolClick}
          id='stool'
          ref={this.stool}
          name='stool'
          style={{
            position: 'absolute',
            top: 250,
            left: canvLeft + 110
          }}
          alt='stool'
        />
        {/* Trash */}
        <img src={trash}
          onClick={this.handleTrashClick}
          id='trash'
          name='trash'
          style={{
            position: 'absolute',
            top: 250,
            left: canvLeft + 510
          }}
          alt='trash'
        />
        {/* Safe */}
        <img src={safe}
          onClick={this.handleSafeClick}
          id='safe'
          name='safe'
          style={{
            position: 'absolute',
            top: 250,
            left: canvLeft + 570
          }}
          alt='safe'
        />
        {/* CrowBar */}
        {(this.state.crowBar.currState === 0 ? <img src={crowBar}
          onClick={this.handleCrowBarClick}
          id='crowBar'
          name='crowBar'
          style={{
            position: 'absolute',
            top: 285,
            left: canvLeft + 580
          }}
          alt='crowBar'
        /> : null)}
        {/* Picture */}
        <img src={picture}
          onClick={this.handlePictureClick}
          ref={this.picture}
          id='picture'
          name='picture'
          style={{
            position: 'absolute',
            top: 250,
            left: canvLeft + 570
          }}
          alt='sunny day'
        />
        {/*HitBoxes*/}
        <img src={hitBox}
          ref={this.hitBox1}
          id='hitBox1'
          name='hitBox1'
          style={{
            position: 'absolute',
            top: 250,
            left: canvLeft + 450
          }}
          alt='HitBox'
        />
        {/* Character */}
        <div className="character"
          key="character"
          id="character"
          ref={this.char}
          style={{
            position: 'absolute',
            left: canvLeft + 290,
            top: 260,
            width: 40,
            height: 40,
            fontSize: 20,
            color: 'white',
            borderRadius: 50,
            backgroundColor: 'red'
          }}>
        </div>

        {/* Lights Out */}
        {(currLamp === lamp02 || currLamp === lamp03 ?
          <div
            style={{
              backgroundColor: '#000000',
              opacity: 0.9,
              pointerEvents: 'none',
              position: 'absolute',
              width: 640,
              height: 425,
              left: canvLeft,
              top: 50
            }}>
          </div> :
          <div>
          </div>
        )}
        {(currLamp === lamp01 ?
          <div className="btnPanel">
            <button className="btn"
              onPointerDown = {this.handleUpDown}
              onMouseDown={this.handleUpDown}
              onMouseUp={this.handleUpUp}
              onMouseOut={this.handleUpOut}
              id = 'btnUp'
              style={{
                position: 'absolute',
                top: 480,
                left: canvLeft + 280,
                width: 70,
                height: 70,
                borderRadius: 50,
                fontSize:20,
                color: 'white',
                backgroundColor: '#DC0000',
                cursor: 'none'
              }}
            >&#8593;
          </button>
            <br />
            <button className="btn"
              onMouseDown={this.handleLeftDown}
              onMouseUp={this.handleLeftUp}
              onMouseOut={this.handleLeftOut}
              style={{
                position: 'absolute',
                top: 550,
                left: canvLeft + 210,
                width: 70,
                height: 70,
                borderRadius: 50,
                fontSize:20,
                color: 'white',
                backgroundColor: '#DC0000',
                cursor: 'none'
              }}
            >&#8592;
          </button>
            <button className="btn"
              onMouseDown={this.handleDownDown}
              onMouseUp={this.handleDownUp}
              onMouseOut={this.handleDownOut}
              style={{
                position: 'absolute',
                top: 550,
                left: canvLeft + 280,
                width: 70,
                height: 70,
                borderRadius: 50,
                fontSize:20,
                color: 'white',
                backgroundColor: '#DC0000',
                cursor: 'none'
              }}
            >&#8595;
          </button>
            <button className="btn"
              onMouseDown={this.handleRightDown}
              onMouseUp={this.handleRightUp}
              onMouseOut={this.handleRightOut}
              style={{
                position: 'absolute',
                top: 550,
                left: canvLeft + 350,
                width: 70,
                height: 70,
                borderRadius: 50,
                fontSize:20,
                color: 'white',
                backgroundColor: '#DC0000',
                cursor: 'none'
              }}
            >&#8594;
          </button>
            <br />
          </div>
          :
          //Lights Off
          <div className="btnPanel">
            <button className="btn"
              onClick = {this.handleNoMove}
              style={{
                position: 'absolute',
                top: 480,
                left: canvLeft + 280,
                width: 70,
                height: 70,
                borderRadius: 50,
                fontSize:20,
                color: 'white',
                backgroundColor: '#DC0000',
                cursor: 'none'
              }}
            >&#8593;
          </button>
            <br />
            <button className="btn"
            onClick = {this.handleNoMove}
              style={{
                position: 'absolute',
                top: 550,
                left: canvLeft + 210,
                width: 70,
                height: 70,
                borderRadius: 50,
                fontSize:20,
                color: 'white',
                backgroundColor: '#DC0000',
                cursor: 'none'
              }}
            >&#8592;
          </button>
            <button className="btn"
            onClick = {this.handleNoMove}
              style={{
                position: 'absolute',
                top: 550,
                left: canvLeft + 280,
                width: 70,
                height: 70,
                borderRadius: 50,
                fontSize:20,
                color: 'white',
                backgroundColor: '#DC0000',
                cursor: 'none'
              }}
            >&#8595;
          </button>
            <button className="btn"
            onClick = {this.handleNoMove}
              style={{
                position: 'absolute',
                top: 550,
                left: canvLeft + 350,
                width: 70,
                height: 70,
                borderRadius: 50,
                fontSize:20,
                color: 'white',
                backgroundColor: '#DC0000',
                cursor: 'none'
              }}
            >&#8594;
          </button>
            <br />
          </div>
        )}

        {/* InfoMessage */}
        {(this.state.infoMessage ?
          <section >
            <div className='infoPaper'
              style={{
                backgroundColor: 'white',
                borderStyle: 'solid',
                borderRadius: 5,
                position: 'absolute',
                width: 250,
                height: 150,
                left: canvLeft + 200,
                top: 150
              }}
            >{this.state.infoMessage}
            </div>
            <button onClick={this.clearInfo} style={{
              position: 'absolute',
              top: 262,
              left: canvLeft + 205,
              width: 40,
              height: 40,
              borderRadius: 50,
              color: 'white',
              backgroundColor: 'green',
              cursor: 'none'
            }}>Back</button>
          </section>
          : null
        )}
      </div>
    )
  }
  checkSafeAnswer = () => {
    let { infoMessage, keyUnlocked, key, safePuzzle, safeAnswer, safeAnswer2, safeAnswer3 } = this.state
    let text
    if (safeAnswer === 4 && safeAnswer2 === 0 && safeAnswer3 === 0 && !keyUnlocked) {
      soundSFX.combinationSFX.play()
      this.setState({
        keyState: key.currState += 1,
        keyUnlocked: keyUnlocked = true,
        infoMessage: infoMessage = null,
        safePuzzle: safePuzzle = false,
      })

    } else {
      soundSFX.doorLockSFX.play()
      text = [
        <br key="0" />,
        <br key="1" />,
        <br key="2" />,
        `Nope, It Didn't Work!`]
      this.setState({
        infoMessage: infoMessage = text,
        safePuzzle: safePuzzle = false
      })
    }
    this.handleParams(infoMessage, keyUnlocked, key, safePuzzle, safeAnswer, safeAnswer2, safeAnswer3)
  }

  checkCombAnswer = () => {
    let { infoMessage, keyUnlocked, key, currCombLock, combUnlocked, combinationPuzzle, safeAnswer, safeAnswer2, safeAnswer3, safeAnswer4, safeAnswer5 } = this.state
    let text
    if (safeAnswer === 1 && safeAnswer2 === 1 && safeAnswer3 === 0 && safeAnswer4 === 0 && safeAnswer5 === 1) {
      soundSFX.combinationSFX.play()
      this.setState({
        infoMessage: infoMessage = null,
        combUnlocked: combUnlocked = true,
        currCombLock: currCombLock = combinationLock02,
        combinationPuzzle: combinationPuzzle = false,
      })
    } else {
      soundSFX.doorLockSFX.play()
      text = [
        <br key="0" />,
        <br key="1" />,
        <br key="2" />,
        `Nope, It Didn't Work!`]
      this.setState({
        infoMessage: infoMessage = text,
        combinationPuzzle: combinationPuzzle = false
      })
    }
    this.handleParams(infoMessage, keyUnlocked, key, combinationPuzzle, currCombLock, combUnlocked, safeAnswer, safeAnswer2, safeAnswer3)
  }

  render() {
    let canvLeft
    if (this.props.screenWidth <= 1085) {
      canvLeft = 0
    } else if (this.props.screenWidth > 1085 && this.props.screenWidth <= 1366) {
      canvLeft = 350
    } else {
      canvLeft = 450
    }
    return (
      <div>
        {this.renderComponents()}
        {this.renderInventory()}
        {(this.state.combinationPuzzle ?
          <div style={{
            position: 'absolute', top: 200, left: canvLeft + 190, width: 250, height: 155, backgroundColor: 'black',
            textAlign: 'center',
            borderStyle: 'solid',
            borderRadius: 20,
          }}>
            <label htmlFor="combGuess"
              className="combGuess_label"
            >Enter The Combination Code!</label> <br />
            <button type='button' id='incDecBtn' onClick={() => this.handleIncrement(1)} className='formBtn'>+</button>
            <button type='button' id='incDecBtn' onClick={() => this.handleIncrement(2)} className='formBtn'>+</button>
            <button type='button' id='incDecBtn' onClick={() => this.handleIncrement(3)} className='formBtn'>+</button>
            <button type='button' id='incDecBtn' onClick={() => this.handleIncrement(4)} className='formBtn'>+</button>
            <button type='button' id='incDecBtn' onClick={() => this.handleIncrement(5)} className='formBtn'>+</button><br />
            <div
              style={{ position: 'absolute', marginRight: 5, left: 56, width: 26, height: 28, background: 'white' }}
              type="text"
              id="combGuess_input"
              name="safeAnswer"
              required
            >{this.state.safeAnswer}</div>
            <div
              style={{ position: 'absolute', marginRight: 5, left: 85, width: 26, height: 28, background: 'white' }}
              type="text"
              id="guess_input"
              name="safeAnswer2"
              required
            >{this.state.safeAnswer2}</div>
            <div
              style={{ position: 'absolute', left: 113, width: 25, height: 28, background: 'white' }}
              type="text"
              id="guess_input"
              name="safeAnswer3"
              required
            >{this.state.safeAnswer3}</div>
            <div
              style={{ position: 'absolute', left: 140, width: 26, height: 28, background: 'white' }}
              type="text"
              id="guess_input"
              name="safeAnswer4"
              required
            >{this.state.safeAnswer4}</div>
            <div
              style={{ position: 'absolute', left: 168, width: 26, height: 28, background: 'white' }}
              type="text"
              id="guess_input"
              name="safeAnswer5"
              required
            >{this.state.safeAnswer5}</div>
            <br />
            <button type='button' id='incDecBtn' onClick={() => this.handleDecrement(1)} className='formBtn'>-</button>
            <button type='button' id='incDecBtn' onClick={() => this.handleDecrement(2)} className='formBtn'>-</button>
            <button type='button' id='incDecBtn' onClick={() => this.handleDecrement(3)} className='formBtn'>-</button>
            <button type='button' id='incDecBtn' onClick={() => this.handleDecrement(4)} className='formBtn'>-</button>
            <button type='button' id='incDecBtn' onClick={() => this.handleDecrement(5)} className='formBtn'>-</button>
            <br />
            <button type='button' onClick={this.checkCombAnswer} className='formBtn'>Enter</button>
          </div>
          : null)}

        {(this.state.safePuzzle ?
          <div style={{
            position: 'absolute', top: 200, left: canvLeft + 190, width: 250, height: 155, backgroundColor: 'black',
            textAlign: 'center',
            borderStyle: 'solid',
            borderRadius: 5,
          }}>
            <label htmlFor="safeGuess"
              className="guess_label"
            >Enter The Correct Safe Code!</label> <br />
            <button type='button' id='incDecBtn' onClick={() => this.handleIncrement(1)} className='formBtn'>+</button>
            <button type='button' id='incDecBtn' onClick={() => this.handleIncrement(2)} className='formBtn'>+</button>
            <button type='button' id='incDecBtn' onClick={() => this.handleIncrement(3)} className='formBtn'>+</button><br />
            <div
              style={{ position: 'absolute', marginRight: 5, left: 83, width: 26, height: 28, background: 'white' }}
              type="text"
              id="guess_input"
              name="safeAnswer"
              required
            >{this.state.safeAnswer}</div>
            <div
              style={{ position: 'absolute', marginRight: 5, left: 112, width: 26, height: 28, background: 'white' }}
              type="text"
              id="guess_input"
              name="safeAnswer2"
              required
            >{this.state.safeAnswer2}</div>
            <div
              style={{ position: 'absolute', left: 140, width: 26, height: 28, background: 'white' }}
              type="text"
              id="guess_input"
              name="safeAnswer3"
              required
            >{this.state.safeAnswer3}</div>
            <br />
            <button type='button' id='incDecBtn' onClick={() => this.handleDecrement(1)} className='formBtn'>-</button>
            <button type='button' id='incDecBtn' onClick={() => this.handleDecrement(2)} className='formBtn'>-</button>
            <button type='button' id='incDecBtn' onClick={() => this.handleDecrement(3)} className='formBtn'>-</button>
            <br />
            <button type='button' onClick={this.checkSafeAnswer} className='formBtn'>Enter</button>
          </div> : null)}

        <div id="circleCursor" ref={this.circleCursor}></div>
      </div>
    )
  }
}
export default Canvas