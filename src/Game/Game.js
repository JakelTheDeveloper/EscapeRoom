import React, { Component } from 'react'
import AssetOBJ from '../AssetHelper/AssetHelper'
import ComponentOBJ from '../Components/ComponentHelper'
import soundSFX from '../soundFileHelper/SoundFile'
import './Game.css'

class Game extends Component {
  constructor(props) {
    super(props)
    this.char = React.createRef()
    this.dresser = React.createRef()
    this.door = React.createRef()
    this.couch = React.createRef()
    this.rug = React.createRef()
    this.lamp = React.createRef()
    this.table = React.createRef()
    this.picture = React.createRef()
    this.bobPin = React.createRef()
    this.stool = React.createRef()
    this.toolBox = React.createRef()
    this.hitBox1 = React.createRef()
    this.hitBox2 = React.createRef()
    this.state = {
      currDoor: AssetOBJ.door01,
      currLamp: AssetOBJ.lamp01,
      currRug: AssetOBJ.rug01,
      currStool: AssetOBJ.stool01,
      currDresser: AssetOBJ.dresser01,
      currToolBox: AssetOBJ.toolBox01,
      currCouch: AssetOBJ.couch01,
      currCombLock: AssetOBJ.combinationLock01,
      combUnlocked: false,
      currBoltLock: AssetOBJ.boltLock01,
      boltUnlocked: false,
      currKeyLock: AssetOBJ.keyLock01,
      keyUnlocked: false,
      toolBoxUnlock: false,
      infoMessage: null,
      highScoreMessage:null,
      itemsSelected: 0,
      safePuzzle: false,
      combinationPuzzle: false,
      answer: 0,
      answer2: 0,
      answer3: 0,
      answer4: 0,
      answer5: 0,
      screws: { currState: 0, selected: false, screw1: false, screw2: false, screw3: false, screw4: false },
      bobbyPin: { currState: 0, selected: false },
      bulb: { currState: 0, selected: false },
      glove: { currState: 0, selected: false },
      crowBar: { currState: 0, selected: false },
      screwDriver: { currState: 0, selected: false },
      key: { currState: 0, selected: false },
      borders: { left: 590, right: 910, top: 123, bottom: 340 }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const value = event.target.value
    this.setState({ ...this.state, [event.target.name]: value })
  }
  handleNoMove = () => {
    let { infoMessage } = this.state
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
  clearInfo = () => {
    let { infoMessage } = this.state
    this.setState({ infoMessage: infoMessage = null })
    this.handleParams(infoMessage)
  }
  handleIncrement = (id) => {
    let { answer, answer2, answer3, answer4, answer5 } = this.state
    if (id === 1) {
      if (answer < 9) {
        this.setState({ answer: answer += 1 })
      } else if (answer === 9) {
        this.setState({ answer: answer = 0 })
      }
    } else if (id === 2) {
      if (answer2 < 9) {
        this.setState({ answer2: answer2 += 1 })
      } else if (answer2 === 9) {
        this.setState({ answer2: answer2 = 0 })
      }
    } else if (id === 3) {
      if (answer3 < 9) {
        this.setState({ answer3: answer3 += 1 })
      } else if (answer3 === 9) {
        this.setState({ answer3: answer3 = 0 })
      }
    } else if (id === 4) {
      if (answer4 < 9) {
        this.setState({ answer4: answer4 += 1 })
      } else if (answer4 === 9) {
        this.setState({ answer4: answer4 = 0 })
      }
    } else if (id === 5) {
      if (answer5 < 9) {
        this.setState({ answer5: answer5 += 1 })
      } else if (answer5 === 9) {
        this.setState({ answer5: answer5 = 0 })
      }
    }
  }
  handleDecrement = (id) => {
    let { answer, answer2, answer3, answer4, answer5 } = this.state
    if (id === 1) {
      if (answer > 0) {
        this.setState({ answer: answer -= 1 })
      } else if (answer === 0) {
        this.setState({ answer: answer = 9 })
      }
    } else if (id === 2) {
      if (answer2 > 0) {
        this.setState({ answer2: answer2 -= 1 })
      } else if (answer2 === 0) {
        this.setState({ answer2: answer2 = 9 })
      }
    } else if (id === 3) {
      if (answer3 > 0) {
        this.setState({ answer3: answer3 -= 1 })
      } else if (answer3 === 0) {
        this.setState({ answer3: answer3 = 9 })
      }
    } else if (id === 4) {
      if (answer4 > 0) {
        this.setState({ answer4: answer4 -= 1 })
      } else if (answer4 === 0) {
        this.setState({ answer4: answer4 = 9 })
      }
    } else if (id === 5) {
      if (answer5 > 0) {
        this.setState({ answer5: answer5 -= 1 })
      } else if (answer5 === 0) {
        this.setState({ answer5: answer5 = 9 })
      }
    }
  }
  checkSafeAnswer = () => {
    let { infoMessage, keyUnlocked, key, safePuzzle, answer, answer2, answer3 } = this.state
    let text
    if (answer === 4 && answer2 === 0 && answer3 === 0 && !keyUnlocked) {
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
    this.handleParams(infoMessage, keyUnlocked, key, safePuzzle, answer, answer2, answer3)
  }
  checkCombAnswer = () => {
    let { infoMessage, keyUnlocked, key, currCombLock, combUnlocked, combinationPuzzle, answer, answer2, answer3, answer4, answer5 } = this.state
    let text
    if (answer === 1 && answer2 === 1 && answer3 === 0 && answer4 === 0 && answer5 === 1) {
      soundSFX.combinationSFX.play()
      this.setState({
        infoMessage: infoMessage = null,
        combUnlocked: combUnlocked = true,
        currCombLock: currCombLock = AssetOBJ.combinationLock02,
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
    this.handleParams(infoMessage, keyUnlocked, key, combinationPuzzle, currCombLock, combUnlocked, answer, answer2, answer3)
  }
  handleParams(params) {
    return
  }

  handleDresserClick = () => {
    let circle = this.char.current.returnData()
    let dresser = this.dresser.current.returnData()
    let touch = false
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = dresser.left
    let obj2Y = dresser.top
    if (obj1X < obj2X + dresser.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + dresser.height && obj1Y + circle.height > obj2Y) {
      touch = true
    }
    let { currDresser } = this.state
    if (currDresser === AssetOBJ.dresser01 && touch) {
      soundSFX.dresserSFX.play()
      this.setState({ currDresser: currDresser = AssetOBJ.dresser02 })
    } else {
      if (touch)
        soundSFX.dresserSFX.play()
      this.setState({ currDresser: currDresser = AssetOBJ.dresser01 })
    }
  }
  handleCouchClick = () => {
    let circle = this.char.current.returnData()
    let couch = this.couch.current.returnData()
    let touch = false
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = couch.left
    let obj2Y = couch.top

    if (obj1X < obj2X + couch.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + couch.height && obj1Y + circle.height > obj2Y) {
      touch = true
    }

    let { currCouch } = this.state
    if (currCouch === AssetOBJ.couch01 && touch) {
      this.setState({ currCouch: currCouch = AssetOBJ.couch02 })
    } else
      if (currCouch === AssetOBJ.couch02 && touch) {
        this.setState({ currCouch: currCouch = AssetOBJ.couch01 })
      }
  }
  handleDoorClick = () => {
    let circle = this.char.current.returnData()
    let door = this.door.current.returnData()
    let touch = false
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = door.left
    let obj2Y = door.top
    if (obj1X < obj2X + door.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + door.height && obj1Y + circle.height > obj2Y) {
      touch = true
    }
    let { currDoor, currKeyLock, boltUnlocked, combUnlocked, highScoreMessage } = this.state
    let zeroHourData
    let zeroMinData
    let zeroSecData
    if (this.props.hours >= 0 && this.props.hours < 10) {
      zeroHourData = '0'
    }
    if (this.props.minutes >= 0 && this.props.minutes < 10) {
      zeroMinData = '0'
    }
    if (this.props.seconds >= 0 && this.props.seconds < 10) {
      zeroSecData = '0'
    }
    let text = [
      "Congratulations",
      <br  key = '0'/>,
      "You Escaped In",
      <br  key = '1'/>,
      zeroHourData,
      this.props.hours,
      ":",
      zeroMinData,
      this.props.minutes, 
      ":",
      zeroSecData,
      this.props.seconds
    ]
    if (currDoor === AssetOBJ.door01 && touch && currKeyLock === AssetOBJ.keyLock02 && boltUnlocked && combUnlocked) {
      soundSFX.doorOpenSFX.play()
      this.setState({ currDoor: currDoor = AssetOBJ.door02, highScoreMessage: highScoreMessage = text })
      this.handleParams(highScoreMessage)
      this.props.handleStop()
    } else
      if (currDoor === AssetOBJ.door01 && touch) {
        if (currKeyLock !== AssetOBJ.keyLock02 || !boltUnlocked || !combUnlocked)
          soundSFX.doorLockSFX.play()
      }
  }
  handleRugClick = () => {
    let circle = this.char.current.returnData()
    let rug = this.rug.current.returnData()
    let touch = false
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = rug.left
    let obj2Y = rug.top

    if (obj1X < obj2X + rug.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + rug.height && obj1Y + circle.height > obj2Y) {
      touch = true
    }

    let { currRug } = this.state
    if (currRug === AssetOBJ.rug01 && touch) {
      this.setState({ currRug: currRug = AssetOBJ.rug02 })
    } else
      if (currRug === AssetOBJ.rug02 && touch) {
        this.setState({ currRug: currRug = AssetOBJ.rug01 })
      }
  }
  handleLightClick = () => {
    let circle = this.char.current.returnData()
    let lamp = this.lamp.current.returnData()
    let touch = false
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = lamp.left
    let obj2Y = lamp.top
    if (obj1X < obj2X + lamp.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + lamp.height && obj1Y + circle.height > obj2Y) {
      touch = true
    }
    let { currLamp, glove, bulb, itemsSelected } = this.state
    if (currLamp === AssetOBJ.lamp01 && touch) {
      soundSFX.lightSFX.play()
      this.setState({ currLamp: currLamp = AssetOBJ.lamp02 })
    } else
      if (currLamp === AssetOBJ.lamp02 && touch && !glove.selected) {
        soundSFX.lightSFX.play()
        this.setState({ currLamp: currLamp = AssetOBJ.lamp01 })
      } else
        if (currLamp === AssetOBJ.lamp02 && touch && glove.selected) {
          this.setState({
            currLamp: currLamp = AssetOBJ.lamp03,
            bulbState: bulb.currState += 1
          })
        } else if (currLamp === AssetOBJ.lamp03 && touch && glove.selected && glove.currState === 2) {
          soundSFX.lightSFX.play()
          this.setState({
            currLamp: currLamp = AssetOBJ.lamp01,
            bulbState: bulb.currState = 0,
            gloveSelected: glove.selected = false,
            gloveState: glove.currState -= 1,
            itemsSelected: itemsSelected -= 1
          })
        }
  }
  handleToolBoxClick = () => {
    let circle = this.char.current.returnData()
    let toolBox = this.toolBox.current.returnData()
    let touch = false
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = toolBox.left
    let obj2Y = toolBox.top
    if (obj1X < obj2X + toolBox.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + toolBox.height && obj1Y + circle.height > obj2Y) {
      touch = true
    }
    let { currToolBox, infoMessage, toolBoxUnlock, crowBar, itemsSelected } = this.state
    let text = [
      <br key='0' />,
      <br key='1' />,
      <br key='2' />,
      `It's Stuck!!!`
    ]
    if (currToolBox === AssetOBJ.toolBox01 && touch && crowBar.selected) {
      soundSFX.boltSFX.play()
      this.setState({
        currToolBox: currToolBox = AssetOBJ.toolBox02,
        toolBox: toolBoxUnlock = true,
        newBar: crowBar.selected = false,
        itemsSelected: itemsSelected -= 1
      })
      this.handleParams(currToolBox)
    } else
      if (currToolBox === AssetOBJ.toolBox01 && touch && !this.state.crowBar.selected && !toolBoxUnlock) {
        soundSFX.doorLockSFX.play()
        this.setState({ infoMessage: infoMessage = text })
        this.handleParams(infoMessage)
      }
      else
        if (currToolBox === AssetOBJ.toolBox01 && touch) {
          this.setState({ currToolBox: currToolBox = AssetOBJ.toolBox02 })
          this.handleParams(currToolBox)
        } else
          if (currToolBox === AssetOBJ.toolBox02 && touch) {
            this.setState({ currToolBox: currToolBox = AssetOBJ.toolBox01 })
            this.handleParams(currToolBox)
          }
  }
  handlePictureClick = () => {
    let circle = this.char.current.returnData()
    let hitBox = this.hitBox1.current.returnData()
    let pic = this.picture.current.returnData()
    let picFunc = this.picture.current
    let touch = false
    let picY = pic.top
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = hitBox.left
    let obj2Y = hitBox.top
    if (obj1X < obj2X + hitBox.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + hitBox.height && obj1Y + circle.height > obj2Y) {
      touch = true
    }
    if (touch && picY < 300) {
      picFunc.handleToggled()
      soundSFX.couchSFX.play()
    } else
      if (touch && picY >= 320) {
        picFunc.handleToggled()
        soundSFX.couchSFX.play()
      }
  }
  handlePaperClick = () => {
    let circle = this.char.current.returnData()
    let tableB = this.table.current.returnData()
    let touch
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = tableB.left
    let obj2Y = tableB.top

    if (obj1X < obj2X + tableB.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + tableB.height && obj1Y + circle.height > obj2Y) {
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
    let circle = this.char.current.returnData()
    let tableB = this.table.current.returnData()
    let touch
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = tableB.left
    let obj2Y = tableB.top

    if (obj1X < obj2X + tableB.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + tableB.height && obj1Y + circle.height > obj2Y) {
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
    let circle = this.char.current.returnData()
    let hitBox = this.hitBox1.current.returnData()
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = hitBox.left
    let obj2Y = hitBox.top

    if (obj1X < obj2X + hitBox.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + hitBox.height && obj1Y + circle.height > obj2Y) {
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
    let circle = this.char.current.returnData()
    let stool = this.stool.current.returnData()
    let touch = false
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = stool.left
    let obj2Y = stool.top

    if (obj1X < obj2X + stool.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + stool.height && obj1Y + circle.height > obj2Y) {
      touch = true
    }

    let { currStool, infoMessage, screwDriver, itemsSelected } = this.state
    if (currStool === AssetOBJ.stool01 && touch && this.state.screwDriver.selected && this.state.screwDriver.currState === 2) {
      this.setState({
        currStool: currStool = AssetOBJ.stool02,
        itemsSelected: itemsSelected = 0,
        screwDriverSelected: screwDriver.selected = false,
        screwDriverState: screwDriver.currState = 1,
      })
      this.handleParams(itemsSelected)
    } else
      if (currStool === AssetOBJ.stool01 && touch && !this.state.screwDriver.selected) {
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
    let circle = this.char.current.returnData()
    let hitBox = this.hitBox1.current.returnData()
    let touch = false
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = hitBox.left
    let obj2Y = hitBox.top

    if (obj1X < obj2X + hitBox.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + hitBox.height && obj1Y + circle.height > obj2Y) {
      touch = true
    }

    if (touch) {
      this.setState({ safePuzzle: safePuzzle = !safePuzzle })
    }
  }
  handleCombLockClick = () => {
    let circle = this.char.current.returnData()
    let door = this.door.current.returnData()
    let touch = false
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = door.left
    let obj2Y = door.top

    if (obj1X < obj2X + door.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + door.height && obj1Y + circle.height > obj2Y) {
      touch = true
    }

    let { currCombLock, combinationPuzzle, answer, answer2, answer3, answer4, answer5 } = this.state
    if (currCombLock === AssetOBJ.combinationLock01 && touch && !combinationPuzzle) {
      this.setState({
        answer: answer = 0,
        answer2: answer2 = 0,
        answer3: answer3 = 0,
        answer4: answer4 = 0,
        answer5: answer5 = 0,
        combinationPuzzle: combinationPuzzle = true
      })
      this.handleParams(answer, answer2, answer3, answer4, answer5)
    } else if (currCombLock === AssetOBJ.combinationLock01 && touch && combinationPuzzle) {
      this.setState({
        combinationPuzzle: combinationPuzzle = false
      })
    }
  }
  handleBoltLockClick = () => {
    let circle = this.char.current.returnData()
    let door = this.door.current.returnData()
    let touch = false
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = door.left
    let obj2Y = door.top

    if (obj1X < obj2X + door.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + door.height && obj1Y + circle.height > obj2Y) {
      touch = true
    }

    let { currBoltLock, bobbyPin, itemsSelected, infoMessage, boltUnlocked } = this.state
    let text
    if (currBoltLock === AssetOBJ.boltLock01 && touch && bobbyPin.selected && bobbyPin.currState === 1) {
      text = [
        <br key='0' />,
        <br key='1' />,
        'I need to find a way to get this bobby pin',
        <br key='2' />,
        'to fit inside this lock!'
      ]
      this.setState({ infoMessage: infoMessage = text })
    } else
      if (currBoltLock === AssetOBJ.boltLock01 && touch && bobbyPin.selected && bobbyPin.currState === 2) {
        soundSFX.boltSFX.play()
        this.setState({
          boltUnlocked: boltUnlocked = true,
          bobbyPinSelected: bobbyPin.selected = false,
          itemsSelected: itemsSelected = 0
        })
      } else
        if (currBoltLock === AssetOBJ.boltLock01 && touch) {
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
    let circle = this.char.current.returnData()
    let door = this.door.current.returnData()
    let touch = false
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = door.left
    let obj2Y = door.top

    if (obj1X < obj2X + door.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + door.height && obj1Y + circle.height > obj2Y) {
      touch = true
    }

    let { currKeyLock, itemsSelected, infoMessage, keyUnlocked, key } = this.state
    let text
    if (currKeyLock === AssetOBJ.keyLock01 && touch && !key.selected) {
      soundSFX.doorLockSFX.play()
      text = [
        <br key='0' />,
        <br key='1' />,
        <br key='2' />,
        `It's locked! I Need a Key!`,
      ]
      this.setState({ infoMessage: infoMessage = text })
    } else
      if (currKeyLock === AssetOBJ.keyLock01 && touch && key.selected) {
        soundSFX.boltSFX.play()
        this.setState({
          keyUnlocked: keyUnlocked = true,
          currKeyLock: currKeyLock = AssetOBJ.keyLock02,
          keySelected: key.selected = false,
          keyState: key.currState = 0,
          itemsSelected: itemsSelected = 0
        })
      }
    this.handleParams(currKeyLock, itemsSelected, infoMessage, keyUnlocked, key)
  }


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
    let circle = this.char.current.returnData()
    let hitBox = this.hitBox2.current.returnData()
    let touch = false
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = hitBox.left
    let obj2Y = hitBox.top
    let { screws } = this.state


    if (obj1X < obj2X + hitBox.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + hitBox.height && obj1Y + circle.height > obj2Y) {
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
    let circle = this.char.current.returnData()
    let stool = this.stool.current.returnData()
    let touch
    let text
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = stool.left
    let obj2Y = stool.top

    if (obj1X < obj2X + stool.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + stool.height && obj1Y + circle.height > obj2Y) {
      touch = true
    }

    if (this.state.currStool === AssetOBJ.stool01 && touch) {
      text = [
        <br key='0' />,
        <br key='1' />,
        <br key='2' />,
        `If this stool wasn't broken, I could use it to get that glove!`
      ]
      this.setState({ infoMessage: infoMessage = text })
      this.handleParams(infoMessage)
    } else if (this.state.currStool === AssetOBJ.stool02 && touch) {
      this.setState({ gloveState: glove.currState += 1 })
      this.handleParams(glove)
    }
  }
  handleCrowBarClick = () => {
    let { crowBar } = this.state
    let touch
    let circle = this.char.current.returnData()
    let hitBox = this.hitBox1.current.returnData()
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = hitBox.left
    let obj2Y = hitBox.top

    if (obj1X < obj2X + hitBox.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + hitBox.height && obj1Y + circle.height > obj2Y) {
      touch = true
    }
    if (touch) {
      this.setState({ crowBarState: crowBar.currState += 1 })
    }
  }
  handleScrewDriverClick = () => {
    let circle = this.char.current.returnData()
    let toolBox = this.toolBox.current.returnData()
    let touch = false
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = toolBox.left
    let obj2Y = toolBox.top

    if (obj1X < obj2X + toolBox.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + toolBox.height && obj1Y + circle.height > obj2Y) {
      touch = true
    }

    let { screwDriver } = this.state

    if (touch) {
      this.setState({ newScrewDriver: screwDriver.currState += 1 })
    }
  }
  handleBobbyPinClick = () => {
    let circle = this.char.current.returnData()
    let bobPin = this.bobPin.current.returnData()
    let touch = false
    let obj1X = circle.left
    let obj1Y = circle.top
    let obj2X = bobPin.left
    let obj2Y = bobPin.top

    if (obj1X < obj2X + bobPin.width && obj1X + circle.width > obj2X &&
      obj1Y < obj2Y + bobPin.height && obj1Y + circle.height > obj2Y) {
      touch = true
    }

    let { bobbyPin } = this.state
    if (touch) {
      this.setState({ bobbyPinState: bobbyPin.currState += 1 })
    }
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
        <ComponentOBJ.InventoryHolder inventoryHolder={AssetOBJ.inventoryHolder} canvLeft={canvLeft} />
        {(this.state.screws.currState === 0 ?
          null
          : this.state.screws.currState === 1 ?
            <ComponentOBJ.ScrewInventory screw={AssetOBJ.screw01} canvLeft={canvLeft} handleClick={this.handleInventoryClick} />
            :
            this.state.screws.currState === 2 ?
              <ComponentOBJ.ScrewInventory screw={AssetOBJ.screw02} canvLeft={canvLeft} handleClick={this.handleInventoryClick} />
              :
              this.state.screws.currState === 3 ?
                <ComponentOBJ.ScrewInventory screw={AssetOBJ.screw03} canvLeft={canvLeft} handleClick={this.handleInventoryClick} />
                :
                this.state.screws.currState === 4 ?
                  <ComponentOBJ.ScrewInventory screw={AssetOBJ.screw04} canvLeft={canvLeft} handleClick={this.handleInventoryClick} />
                  : null)}
        {(this.state.bobbyPin.currState === 0 ?
          null
          : this.state.bobbyPin.currState === 1 ?
            <ComponentOBJ.BobbyPinInventory bobbyPin={AssetOBJ.bobbyPin01} canvLeft={canvLeft} handleClick={this.handleInventoryClick} />
            :
            this.state.bobbyPin.currState === 2 ?
              <ComponentOBJ.BobbyPinInventory bobbyPin={AssetOBJ.bobbyPin02} canvLeft={canvLeft} handleClick={this.handleInventoryClick} />
              : null)}
        {(this.state.bulb.currState === 0 ?
          null
          : this.state.bulb.currState === 1 ?
            <ComponentOBJ.BulbInventory bulb={AssetOBJ.bulb01} canvLeft={canvLeft} handleClick={this.handleInventoryClick} />
            :
            <ComponentOBJ.BulbInventory bulb={AssetOBJ.bulb02} canvLeft={canvLeft} handleClick={this.handleInventoryClick} />
        )}
        {(this.state.glove.currState === 0 ?
          null
          : this.state.glove.currState === 1 ?
            <ComponentOBJ.GloveInventory glove={AssetOBJ.glove01} canvLeft={canvLeft} handleClick={this.handleInventoryClick} />
            :
            this.state.glove.currState === 2 ?
              <ComponentOBJ.GloveInventory glove={AssetOBJ.glove02} canvLeft={canvLeft} handleClick={this.handleInventoryClick} />
              : null)}
        {(this.state.crowBar.currState === 0 ?
          null
          : this.state.crowBar.currState === 1 ?
            <ComponentOBJ.CrowBarInventory crowBar={AssetOBJ.crowBar} canvLeft={canvLeft} handleClick={this.handleInventoryClick} /> : null)}
        {(this.state.screwDriver.currState === 0 ?
          null
          : this.state.screwDriver.currState === 1 ?
            <ComponentOBJ.ScrewDriverInventory screwDriver={AssetOBJ.screwDriver01} canvLeft={canvLeft} handleClick={this.handleInventoryClick} />
            :
            this.state.screwDriver.currState === 2 ?
              <ComponentOBJ.ScrewDriverInventory screwDriver={AssetOBJ.screwDriver02} canvLeft={canvLeft} handleClick={this.handleInventoryClick} /> : null)}
        {(this.state.key.currState === 0 ?
          null
          : this.state.key.currState === 1 ?
            <ComponentOBJ.KeyInventory houseKey={AssetOBJ.houseKey} canvLeft={canvLeft} handleClick={this.handleInventoryClick} />
            : null)}
        {(this.state.screws.selected === true ? <ComponentOBJ.HighLighter top={425} left={18} canvLeft={canvLeft} /> : null)}
        {(this.state.bobbyPin.selected === true ? <ComponentOBJ.HighLighter top={425} left={58} canvLeft={canvLeft} /> : null)}
        {(this.state.bulb.selected === true ? <ComponentOBJ.HighLighter top={425} left={97} canvLeft={canvLeft} /> : null)}
        {(this.state.glove.selected === true ? <ComponentOBJ.HighLighter top={425} left={136} canvLeft={canvLeft} /> : null)}
        {(this.state.crowBar.selected === true ? <ComponentOBJ.HighLighter top={425} left={175} canvLeft={canvLeft} /> : null)}
        {(this.state.screwDriver.selected === true ? <ComponentOBJ.HighLighter top={425} left={214} canvLeft={canvLeft} /> : null)}
        {(this.state.key.selected === true ? <ComponentOBJ.HighLighter top={425} left={253} canvLeft={canvLeft} /> : null)}
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
        <ComponentOBJ.Canvas bg={AssetOBJ.background} canvLeft={canvLeft} />
        <ComponentOBJ.Door ref={this.door} currDoor={currDoor} canvLeft={canvLeft} handleClick={this.handleDoorClick} />
        {(this.state.currDoor !== AssetOBJ.door02 ?
          <ComponentOBJ.CombinationLock
            currCombLock={currCombLock} canvLeft={canvLeft}
            handleClick={this.handleCombLockClick} /> : null)}
        {(this.state.currDoor !== AssetOBJ.door02 ?
          <ComponentOBJ.KeyLock currKeyLock={currKeyLock} canvLeft={canvLeft}
            handleClick={this.handleKeyLockClick} /> : null)}
        {(!this.state.boltUnlocked ?
          <ComponentOBJ.BoltLock currBoltLock={currBoltLock} canvLeft={canvLeft}
            handleClick={this.handleBoltLockClick} /> : null)}
        <ComponentOBJ.Rug ref={this.rug} currRug={currRug} canvLeft={canvLeft} handleClick={this.handleRugClick} />
        {(this.state.currRug === AssetOBJ.rug02 && !this.state.screws.screw1 ?
          <ComponentOBJ.Screw1 screw={AssetOBJ.screw01} canvLeft={canvLeft} handleClick={this.handleScrewClick} /> : null)}
        <ComponentOBJ.Lamp ref={this.lamp} canvLeft={canvLeft} currLamp={currLamp} handleClick={this.handleLightClick} />
        <ComponentOBJ.Table ref={this.table} table={AssetOBJ.table} canvLeft={canvLeft} />
        {(this.state.bobbyPin.currState === 0 ?
          <ComponentOBJ.BobbyPin ref={this.bobPin} canvLeft={canvLeft} bobPin={AssetOBJ.bobbyPin01} handleClick={this.handleBobbyPinClick} /> : null)}
        <ComponentOBJ.Papers papers={AssetOBJ.papers} canvLeft={canvLeft} handleClick={this.handlePaperClick} />
        <ComponentOBJ.Book book={AssetOBJ.book} canvLeft={canvLeft} handleClick={this.handleBookClick} />
        <ComponentOBJ.HitBox2 ref={this.hitBox2} hitBox={AssetOBJ.hitBox} canvLeft={canvLeft} />
        <ComponentOBJ.Dresser ref={this.dresser} currDresser={currDresser} canvLeft={canvLeft} handleClick={this.handleDresserClick} />
        {(this.state.currDresser === AssetOBJ.dresser02 && !this.state.screws.screw3 ?
          <ComponentOBJ.Screw3 screw={AssetOBJ.screw01} canvLeft={canvLeft} handleClick={this.handleScrewClick} /> : null)}
        <ComponentOBJ.Cabinet cabinet={AssetOBJ.cabinet} canvLeft={canvLeft} />
        <ComponentOBJ.ToolBox ref={this.toolBox} toolBox={currToolBox} canvLeft={canvLeft} handleClick={this.handleToolBoxClick} />
        {(this.state.currToolBox === AssetOBJ.toolBox02 && this.state.screwDriver.currState === 0 ?
          <ComponentOBJ.ScrewDriver screwDriver={AssetOBJ.screwDriver01} canvLeft={canvLeft} handleClick={this.handleScrewDriverClick} /> : null)}
        <ComponentOBJ.Shelf shelf={AssetOBJ.shelf} canvLeft={canvLeft} />
        {(this.state.glove.currState === 0 ?
          <ComponentOBJ.Glove glove={AssetOBJ.glove01} canvLeft={canvLeft} handleClick={this.handleGloveClick} /> : null)}
        <ComponentOBJ.Couch ref={this.couch} currCouch={currCouch} canvLeft={canvLeft} handleClick={this.handleCouchClick} />
        {(this.state.currCouch === AssetOBJ.couch02 && !this.state.screws.screw4 ?
          <ComponentOBJ.Screw4 screw={AssetOBJ.screw01} canvLeft={canvLeft} handleClick={this.handleScrewClick} /> : null)}
        {(!this.state.screws.screw2 ?
          <ComponentOBJ.Screw2 screw={AssetOBJ.screw01} canvLeft={canvLeft} handleClick={this.handleScrewClick} /> : null)}
        <ComponentOBJ.Stool ref={this.stool} currStool={currStool} canvLeft={canvLeft} handleClick={this.handleStoolClick} />
        <ComponentOBJ.Trash trash={AssetOBJ.trash} canvLeft={canvLeft} handleClick={this.handleTrashClick} />
        <ComponentOBJ.Safe safe={AssetOBJ.safe} canvLeft={canvLeft} handleClick={this.handleSafeClick} />
        {(this.state.crowBar.currState === 0 ?
          <ComponentOBJ.CrowBar crowBar={AssetOBJ.crowBar} canvLeft={canvLeft} handleClick={this.handleCrowBarClick} /> : null)}
        <ComponentOBJ.Picture ref={this.picture} canvLeft={canvLeft} picture={AssetOBJ.picture} handleClick={this.handlePictureClick} />
        <ComponentOBJ.HitBox ref={this.hitBox1} hitBox={AssetOBJ.hitBox} canvLeft={canvLeft} />
        <ComponentOBJ.Character ref={this.char} canvLeft={canvLeft} canMove={(currLamp === AssetOBJ.lamp01 ? true : false)}
          borders={this.state.borders} screenWidth={this.props.screenWidth} screenHeight={this.props.screenHeight}
          noMove={this.handleNoMove} />
        {(currLamp === AssetOBJ.lamp02 || currLamp === AssetOBJ.lamp03 ?
          <ComponentOBJ.LightOffFilter canvLeft={canvLeft} /> : null)}
        {(this.state.infoMessage ?
          <ComponentOBJ.InfoMessage infoMessage={this.state.infoMessage} clearInfo={this.clearInfo} canvLeft={canvLeft} /> : null)}
       {(this.state.highScoreMessage ?
          <ComponentOBJ.HighScoreSubmitter 
          highScoreMessage={this.state.highScoreMessage}
          handleBack = {this.props.handleBack} 
          canvLeft={canvLeft} 
          hours={this.props.hours}
          minutes={this.props.minutes}
          seconds={this.props.seconds}
           /> : null)}
      </div>
    )
  }
  renderPuzzles = () => {
    let canvLeft
    let { answer, answer2, answer3, answer4, answer5 } = this.state
    if (this.props.screenWidth <= 1085) {
      canvLeft = 0
    } else if (this.props.screenWidth > 1085 && this.props.screenWidth <= 1366) {
      canvLeft = 350
    } else {
      canvLeft = 450
    }
    return (
      <div>
        {(this.state.combinationPuzzle ?
          <ComponentOBJ.CombinationPuzzle handleIncClick={this.handleIncrement} handleDecClick={this.handleDecrement} check={this.checkCombAnswer}
            canvLeft={canvLeft} ans={answer} ans2={answer2} ans3={answer3} ans4={answer4} ans5={answer5} /> : null)}
        {(this.state.safePuzzle ?
          <ComponentOBJ.SafePuzzle handleIncClick={this.handleIncrement} handleDecClick={this.handleDecrement} check={this.checkSafeAnswer}
            canvLeft={canvLeft} ans={answer} ans2={answer2} ans3={answer3} /> : null)}
      </div>
    )
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
        {this.renderPuzzles()}
        <ComponentOBJ.Timer
          canvLeft={canvLeft}
          handleMute={this.props.handleMute}
          muteState={this.props.muteState}
          hours={this.props.hours}
          minutes={this.props.minutes}
          seconds={this.props.seconds}
        />
        <ComponentOBJ.CircleCursor id="circleCursor" />
      </div>
    )
  }
}
export default Game