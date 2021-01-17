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
      safeAnswer: 0,
      safeAnswer2: 0,
      safeAnswer3: 0,
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
    let { safeAnswer, safeAnswer2, safeAnswer3 } = this.state
    if (id === 1) {
      if (safeAnswer < 9) {
        this.setState({ safeAnswer: safeAnswer += 1 })
      } else if (safeAnswer === 9) {
        this.setState({ safeAnswer: safeAnswer = 0 })
      }
    }else if (id === 2) {
      if (safeAnswer2 < 9) {
        this.setState({ safeAnswer2: safeAnswer2 += 1 })
      } else if (safeAnswer2 === 9) {
        this.setState({ safeAnswer2: safeAnswer2 = 0 })
      }
    }else if (id === 3) {
      if (safeAnswer3 < 9) {
        this.setState({ safeAnswer3: safeAnswer3 += 1 })
      } else if (safeAnswer3 === 9) {
        this.setState({ safeAnswer3: safeAnswer3 = 0 })
      }
    }
  }
  handleDecrement = (id) => {
    let { safeAnswer, safeAnswer2, safeAnswer3 } = this.state
    if (id === 1) {
      if (safeAnswer > 0) {
        this.setState({ safeAnswer: safeAnswer -= 1 })
      } else if (safeAnswer === 0) {
        this.setState({ safeAnswer: safeAnswer = 9 })
      }
    }else if (id === 2) {
      if (safeAnswer2 > 0) {
        this.setState({ safeAnswer2: safeAnswer2 -= 1 })
      } else if (safeAnswer2 === 0) {
        this.setState({ safeAnswer2: safeAnswer2 = 9 })
      }
    }else if (id === 3) {
      if (safeAnswer3 > 0) {
        this.setState({ safeAnswer3: safeAnswer3 -= 1 })
      } else if (safeAnswer3 === 0) {
        this.setState({ safeAnswer3: safeAnswer3 = 9 })
      }
    }
  }
  handleParams(params) {
    return
  }

  componentDidMount() {
    // var filler = document.getElementById("filler");
    // const fill = e => {
    //   filler.style.width = e.offsetX + "px";
    //   filler.style.backgroundColor = "red";
    //   console.log(filler.style.width);
    // };
    // document.addEventListener("mousemove", fill);
    let circleCursor = this.refs.circleCursor
    const onMouseMove = (e) => {
      circleCursor.style.left = e.pageX + 'px';
      circleCursor.style.top = e.pageY + 'px';
    }
    window.addEventListener('mousemove', onMouseMove);
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


  //Object Clicks
  handleDresserClick = () => {
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
      if (touch)
        this.setState({ currDresser: currDresser = dresser01 })
    }
  }
  handleCouchClick = () => {
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
    } else
      if (currCouch === couch02 && touch) {
        this.setState({ currCouch: currCouch = couch01 })
      }
  }
  handleDoorClick = () => {
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

    let { currDoor, keyUnlocked, boltUnlocked, combUnlocked } = this.state
    if (currDoor === door01 && touch && keyUnlocked && boltUnlocked && combUnlocked) {
      this.setState({ currDoor: currDoor = door02 })
    }
  }
  handleRugClick = () => {
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
    } else
      if (touch) {
        this.setState({ currRug: currRug = rug01 })
      }
  }
  handleLightClick = () => {
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

    let { currLamp, glove, bulb, itemsSelected } = this.state
    if (currLamp === lamp01 && touch) {
      this.setState({ currLamp: currLamp = lamp02 })
    } else
      if (currLamp === lamp02 && touch && !glove.selected) {
        this.setState({ currLamp: currLamp = lamp01 })
      } else
        if (currLamp === lamp02 && touch && glove.selected) {
          this.setState({
            currLamp: currLamp = lamp03,
            bulbState: bulb.currState += 1
          })
        } else if (currLamp === lamp03 && touch && glove.selected && glove.currState === 2) {
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

    let { currToolBox, infoMessage, toolBoxUnlock, crowBar, itemsSelected } = this.state
    let text = [
      <br key='0' />,
      <br key='1' />,
      <br key='2' />,
      `It's Stuck!!!`
    ]

    if (currToolBox === toolBox01 && touch && crowBar.selected) {
      this.setState({
        currToolBox: currToolBox = toolBox02,
        toolBox: toolBoxUnlock = true,
        newBar: crowBar.selected = false,
        itemsSelected: itemsSelected -= 1
      })
      this.handleParams(currToolBox)
    } else
      if (currToolBox === toolBox01 && touch && !this.state.crowBar.selected && !toolBoxUnlock) {
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
    let circle = this.refs.char
    let picture = this.refs.picture
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let obj2Y = parseInt(picture.style.top)
    if (obj1Y >= 260 && obj1X >= 916 && obj2Y < 300) {
      picture.style.top = 320 + 'px';
    } else
      if (obj1Y >= 260 && obj1X >= 916 && obj2Y >= 320) {
        picture.style.top = 250 + 'px';
      }
  }
  handlePaperClick = () => {
    let circle = this.refs.char
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let { infoMessage } = this.state
    let text
    if (obj1Y >= 300 && obj1X >= 890 && infoMessage === null) {
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
      if (obj1Y >= 300 && obj1X >= 890 && infoMessage) {
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
    let circle = this.refs.char
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let { infoMessage } = this.state
    let text = [
      <br key='0' />,
      <br key='1' />,
      <br key='2' />,
      'FOO'
    ]
    if (obj1Y >= 300 && obj1X >= 890 && infoMessage === null) {
      this.setState({ infoMessage: infoMessage = text })
    }
  }
  handleTrashClick = () => {
    let circle = this.refs.char
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let { infoMessage } = this.state
    let text = [
      <br key='0' />,
      <br key='1' />,
      <br key='2' />,
      `Ummm I don't think I want to put my hand in there!`
    ]
    if (obj1Y >= 220 && obj1X >= 890 && infoMessage === null) {
      this.setState({ infoMessage: infoMessage = text })
    }
  }
  handleStoolClick = () => {
    let circle = this.refs.char
    let stool = this.refs.stool
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
    let circle = this.refs.char
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    if (obj1Y >= 260 && obj1X >= 916) {
      this.setState({ safePuzzle: safePuzzle = !safePuzzle })
    }
  }
  handleBoltLockClick = () => {
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
  }
  handleKeyLockClick = () => {
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

    let { currKeyLock, itemsSelected, infoMessage, keyUnlocked, key } = this.state
    let text
    if (currKeyLock === keyLock01 && touch && !key.selected) {
      text = [
        <br key='0' />,
        <br key='1' />,
        <br key='2' />,
        `It's locked! I Need a Key!`,
      ]
      this.setState({ infoMessage: infoMessage = text })
    } else
      if (currKeyLock === keyLock01 && touch && key.selected) {

        this.setState({
          keyUnlocked: keyUnlocked = true,
          currKeyLock: currKeyLock = keyLock02,
          keySelected: key.selected = false,
          keyState: key.currState = 0,
          itemsSelected: itemsSelected = 0
        })
        console.log(keyUnlocked)
      }
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
    let circle = this.refs.char
    let touch = false
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    let { screws } = this.state

    if (obj1X >= 850 && obj1Y <= 130) {
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
    let circle = this.refs.char
    let stool = this.refs.stool
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
    let circle = this.refs.char
    let obj1X = parseInt(circle.style.left)
    let obj1Y = parseInt(circle.style.top)
    if (obj1Y >= 260 && obj1X >= 916) {
      this.setState({ crowBarState: crowBar.currState += 1 })
    }
  }
  handleScrewDriverClick = () => {
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

    let { screwDriver } = this.state

    if (touch) {
      this.setState({ newScrewDriver: screwDriver.currState += 1 })
    }
  }
  handleBobbyPinClick = () => {
    let circle = this.refs.char
    let bobPin = this.refs.bobPin
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

  renderInventory = () => {
    return (
      <div>
        {/* Inventory */}
        <img src={inventoryHolder}
          ref='inventoryHolder'
          key="inventoryHolder"
          id='inventoryHolder'
          name='inventoryHolder'
          style={StyleHelper.inventoryHolder}
          alt='inventory'
        />
        {/* Screw_Inventory */}
        {(this.state.screws.currState === 0 ?
          null
          : this.state.screws.currState === 1 ?
            <img src={screw01}
              onClick={() => this.handleInventoryClick('screws')}
              key="screw_inventory"
              ref="screw_inventory"
              id='screw_inventory'
              name='screw_inventory'
              style={StyleHelper.screw_inventory}
              alt='screw_inventory'
            /> :
            this.state.screws.currState === 2 ?
              <img src={screw02}
                onClick={() => this.handleInventoryClick('screws')}
                key="screw_inventory"
                ref="screw_inventory"
                id='screw_inventory'
                name='screw_inventory'
                style={StyleHelper.screw_inventory}
                alt='screw_inventory'
              /> :
              this.state.screws.currState === 3 ?
                <img src={screw03}
                  onClick={() => this.handleInventoryClick('screws')}
                  key="screw_inventory"
                  ref="screw_inventory"
                  id='screw_inventory'
                  name='screw_inventory'
                  style={StyleHelper.screw_inventory}
                  alt='screw_inventory'
                /> :
                this.state.screws.currState === 4 ?
                  <img src={screw04}
                    onClick={() => this.handleInventoryClick('screws')}
                    key="screw_inventory"
                    ref="screw_inventory"
                    id='screw_inventory'
                    name='screw_inventory'
                    style={StyleHelper.screw_inventory}
                    alt='screw_inventory'
                  /> : null)}

        {/* BobbyPin_Inventory */}
        {(this.state.bobbyPin.currState === 0 ?
          null
          : this.state.bobbyPin.currState === 1 ?
            <img src={bobbyPin01}
              onClick={() => this.handleInventoryClick('bobbyPin')}
              key="bobbyPin_inventory"
              ref="bobbyPin_inventory"
              id='bobbyPin_inventory'
              name='bobbyPin_inventory'
              style={StyleHelper.bobbyPin_inventory}
              alt='bobbyPin_inventory'
            /> :
            this.state.bobbyPin.currState === 2 ?
              <img src={bobbyPin02}
                onClick={() => this.handleInventoryClick('bobbyPin')}
                key="bobbyPin_inventory"
                ref="bobbyPin_inventory"
                id='bobbyPin_inventory'
                name='bobbyPin_inventory'
                style={StyleHelper.bobbyPin_inventory}
                alt='bobbyPin_inventory'
              /> : null)}
        {/* Bulb_Inventory */}
        {(this.state.bulb.currState === 0 ?
          null
          : this.state.bulb.currState === 1 ?
            <img src={bulb01}
              onClick={() => this.handleInventoryClick('bulb')}
              key="bulb_inventory"
              ref="bulb_inventory"
              id='bulb_inventory'
              name='bulb_inventory'
              style={StyleHelper.bulb_inventory}
              alt='bulb_inventory'
            /> :
            this.state.bulb.currState === 2 ?
              <img src={bulb02}
                onClick={() => this.handleInventoryClick('bulb')}
                key="bulb_inventory"
                ref="bulb_inventory"
                id='bulb_inventory'
                name='bulb_inventory'
                style={StyleHelper.bulb_inventory}
                alt='bulb_inventory'
              /> : null)}
        {/* Glove_Inventory */}
        {(this.state.glove.currState === 0 ?
          null
          : this.state.glove.currState === 1 ?
            <img src={glove01}
              onClick={() => this.handleInventoryClick('glove')}
              key="glove_inventory"
              ref="glove_inventory"
              id='glove_inventory'
              name='glove_inventory'
              style={StyleHelper.glove_inventory}
              alt='glove_inventory'
            /> :
            this.state.glove.currState === 2 ?
              <img src={glove02}
                onClick={() => this.handleInventoryClick('glove')}
                key="glove_inventory"
                ref="glove_inventory"
                id='glove_inventory'
                name='glove_inventory'
                style={StyleHelper.glove_inventory}
                alt='glove_inventory'
              /> : null)}
        {/* CrowBar_Inventory */}
        {(this.state.crowBar.currState === 0 ?
          null
          : this.state.crowBar.currState === 1 ?
            <img src={crowBar}
              onClick={() => this.handleInventoryClick('crowBar')}
              key="crowBar_inventory"
              ref="crowBar_inventory"
              id='crowBar_inventory'
              name='crowBar_inventory'
              style={StyleHelper.crowBar_inventory}
              alt='crowBar_inventory'
            /> : null)}
        {/* ScrewDriver_Inventory */}
        {(this.state.screwDriver.currState === 0 ?
          null
          : this.state.screwDriver.currState === 1 ?
            <img src={screwDriver01}
              onClick={() => this.handleInventoryClick('screwDriver')}
              key="screwDriver_inventory"
              ref="screwDriver_inventory"
              id='screwDriver_inventory'
              name='screwDriver_inventory'
              style={StyleHelper.screwDriver_inventory}
              alt='screwDriver_inventory'
            /> :
            this.state.screwDriver.currState === 2 ?
              <img src={screwDriver02}
                onClick={() => this.handleInventoryClick('screwDriver')}
                key="screwDriver_inventory"
                ref="screwDriver_inventory"
                id='screwDriver_inventory'
                name='screwDriver_inventory'
                style={StyleHelper.screwDriver_inventory}
                alt='screwDriver_inventory'
              /> : null)}
        {/* Key_Inventory */}
        {(this.state.key.currState === 0 ?
          null
          : this.state.key.currState === 1 ?
            <img src={houseKey}
              onClick={() => this.handleInventoryClick('key')}
              key="key_inventory"
              ref="key_inventory"
              id='key_inventory'
              name='key_inventory'
              style={StyleHelper.key_inventory}
              alt='key_inventory'
            /> : null)}
        {(this.state.screws.selected === true ? <div style={{
          top: 425,
          left: 468,
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
          left: 508,
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
          left: 547,
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
          left: 586,
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
          left: 625,
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
          left: 664,
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
          left: 703,
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
    let { currDresser, currCouch, currDoor, currLamp, currRug, currToolBox, currStool, currCombLock, currBoltLock, currKeyLock } = this.state
    return (
      <div>
        {/* Canvas */}
        <canvas ref='canv'
          className="canvas"
          key="canv"
          style={{ backgroundImage: `url(${background})` }}
          width={640}
          height={425}
        />
        {/* Door */}
        <img src={currDoor}
          onClick={this.handleDoorClick}
          key="door"
          ref="door"
          id='door'
          name='door'
          style={StyleHelper.door}
          alt='door'
        />

        {/* CombinationLock */}
        <img src={currCombLock}
          onClick={() => console.log('CombLock')}
          key="combLock"
          ref="combLock"
          id='combLock'
          name='combLock'
          style={StyleHelper.combLock}
          alt='combLock'
        />

        {/* KeyLock */}
        <img src={currKeyLock}
          onClick={this.handleKeyLockClick}
          key="keyLock"
          ref="keyLock"
          id='keyLock'
          name='keyLock'
          style={StyleHelper.keyLock}
          alt='keyLock'
        />

        {/* BoltLock */}
        {(!this.state.boltUnlocked ? <img src={currBoltLock}
          onClick={this.handleBoltLockClick}
          key="boltLock"
          ref="boltLock"
          id='boltLock'
          name='boltLock'
          style={StyleHelper.boltLock}
          alt='boltLock'
        /> : null)}

        {/* Rug */}
        <img src={currRug}
          onClick={this.handleRugClick}
          key="rug"
          ref="rug"
          id='rug'
          name='rug'
          style={StyleHelper.rug}
          alt='rug'
        />

        {/* Screw(Rug) */}
        {(this.state.currRug === rug02 && !this.state.screws.screw1 ?
          <img src={screw01}
            onClick={() => this.handleScrewClick('screw1')}
            key="screw1"
            ref="screw1"
            id='screw1'
            name='screw1'
            style={{
              position: 'absolute',
              top: 120,
              left: 828
            }}
            alt='screw1'
          /> : null)}

        {/* Lamp */}
        <img src={currLamp}
          onClick={this.handleLightClick}
          key="lamp"
          ref="lamp"
          id='lamp'
          name='lamp'
          style={StyleHelper.lamp}
          alt='lamp'
        />

        {/* Table */}
        <img src={table}
          key="table"
          id='table'
          name='table'
          style={StyleHelper.table}
          alt='table'
        />

        {/* BobbyPin */}
        {(this.state.bobbyPin.currState === 0 ? <img src={bobbyPin01}
          onClick={this.handleBobbyPinClick}
          key='bobPin'
          ref='bobPin'
          id='bobPin'
          name='bobPin'
          style={StyleHelper.bobbyPin}
          alt='bobPin'
        /> : null)}

        {/* Papers */}
        <img src={papers}
          onClick={this.handlePaperClick}
          key="paper"
          ref='papers'
          id='papers'
          name='papers'
          style={StyleHelper.papers}
          alt='papers'
        />

        {/* Book */}
        <img src={book}
          onClick={this.handleBookClick}
          key='book'
          ref='book'
          id='book'
          name='book'
          style={StyleHelper.book}
          alt='book'
        />

        {/* Dresser */}
        <img src={currDresser}
          onClick={this.handleDresserClick}
          key="dresser"
          ref="dresser"
          id='dresser'
          name='dresser'
          style={StyleHelper.dresser}
          alt='dresser'
        />

        {/* Screw(Dresser) */}
        {(this.state.currDresser === dresser02 && !this.state.screws.screw3 ? <img src={screw01}
          onClick={() => this.handleScrewClick('screw3')}
          key="screw3"
          ref="screw3"
          id='screw3'
          name='screw3'
          style={{
            position: 'absolute',
            top: 180,
            left: 935
          }}
          alt='screw3'
        /> : null)
        }

        {/* Cabinet */}
        <img src={cabinet}
          key="cabinet"
          ref="cabinet"
          id='cabinet'
          name='cabinet'
          style={StyleHelper.cabinet}
          alt='cabinet'
        />

        {/* ToolBox */}
        <img src={currToolBox}
          onClick={this.handleToolBoxClick}
          key="toolBox"
          ref="toolBox"
          id='toolBox'
          name='toolBox'
          style={StyleHelper.toolBox}
          alt='toolBox'
        />

        {/* ScrewDriver */}
        {(this.state.currToolBox === toolBox02 && this.state.screwDriver.currState === 0 ?
          <img src={screwDriver01}
            onClick={this.handleScrewDriverClick}
            key="screwDriver"
            ref="screwDriver"
            id='screwDriver'
            name='screwDriver'
            style={StyleHelper.screwDriver}
            alt='screwDriver'
          /> : null)}

        {/* Shelf */}
        <img src={shelf}
          key="shelf"
          ref="shelf"
          id='shelf'
          name='shelf'
          style={StyleHelper.shelf}
          alt='shelf'
        />

        {/* Glove */}
        {(this.state.glove.currState === 0 ? <img src={glove01}
          onClick={this.handleGloveClick}
          key="glove1"
          ref="glove1"
          id='glove1'
          name='glove1'
          style={StyleHelper.glove}
          alt='glove1'
        /> : null)}

        {/* Couch */}
        <img src={currCouch}
          onClick={this.handleCouchClick}
          key="couch"
          ref="couch"
          id='couch'
          name='couch'
          style={StyleHelper.couch}
          alt='couch'
        />

        {/* Screw(Couch) */}
        {(this.state.currCouch === couch02 && !this.state.screws.screw4 ? <img src={screw01}
          onClick={() => this.handleScrewClick('screw4')}
          key="screw4"
          ref="screw4"
          id='screw4'
          name='screw4'
          style={{
            position: 'absolute',
            top: 380,
            left: 550
          }}
          alt='screw4'
        /> : null)}

        {/* Screw(Window) */}
        {(!this.state.screws.screw2 ? <img src={screw01}
          onClick={() => this.handleScrewClick('screw2')}
          key="screw2"
          ref="screw2"
          id='screw2'
          name='screw2'
          style={{
            position: 'absolute',
            top: 95,
            left: 890
          }}
          alt='screw2'
        /> : null)}
        {/* Stool */}
        <img src={currStool}
          onClick={this.handleStoolClick}
          key="stool"
          id='stool'
          ref='stool'
          name='stool'
          style={StyleHelper.stool}
          alt='stool'
        />
        {/* Trash */}
        <img src={trash}
          onClick={this.handleTrashClick}
          key="trash"
          id='trash'
          name='trash'
          style={StyleHelper.trash}
          alt='trash'
        />
        {/* Safe */}
        <img src={safe}
          onClick={this.handleSafeClick}
          key="safe"
          id='safe'
          name='safe'
          style={StyleHelper.safe}
          alt='safe'
        />
        {/* CrowBar */}
        {(this.state.crowBar.currState === 0 ? <img src={crowBar}
          onClick={this.handleCrowBarClick}
          key="crowbar"
          id='crowBar'
          name='crowBar'
          style={StyleHelper.crowBar}
          alt='crowBar'
        /> : null)}
        {/* Picture */}
        <img src={picture}
          onClick={this.handlePictureClick}
          key="picture"
          ref='picture'
          id='picture'
          name='picture'
          style={StyleHelper.picture}
          alt='sunny day'
        />
        {/* Character */}
        <div className="character"
          key="character"
          id="character"
          ref="char"
          style={StyleHelper.redGuy}>
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
              left: 450,
              top: 50
            }}>
          </div> :
          <div>
          </div>
        )}
        {(currLamp === lamp01 ?
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
                left: 650,
                top: 150
              }}
            >{this.state.infoMessage}
            </div>
            <button onClick={this.clearInfo} style={StyleHelper.backBtn}>Back</button>
          </section>
          : null
        )}
      </div>
    )
  }
  checkSafeAnswer = () => {
    let { infoMessage, keyUnlocked, key, safePuzzle, safeAnswer, safeAnswer2, safeAnswer3 } = this.state
    let text
    if (safeAnswer !== 4 && safeAnswer2 !== 0 && safeAnswer3 !== 0) {
      text = [
        <br key="0" />,
        <br key="1" />,
        <br key="2" />,
        `Nope, It Didn't Work!`]
      this.setState({
        infoMessage: infoMessage = text,
        safePuzzle: safePuzzle = false
      })
    } else if (safeAnswer === 4 && safeAnswer2 === 0 && safeAnswer3 === 0 && !keyUnlocked) {
      this.setState({
        keyState: key.currState += 1,
        keyUnlocked: keyUnlocked = true,
        infoMessage: infoMessage = null,
        safePuzzle: safePuzzle = false,
      })
    }
  }
  
  render() {
    return (
      <div>
        {this.renderComponents()}
        {this.renderInventory()}
        {(this.state.safePuzzle ?
          <div style={{
            position: 'absolute', top: 200, left: 640, width: 250, height: 150, backgroundColor: 'black',
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
              style={{ position:'absolute',marginRight:5, left:83, width: 26, height: 28, background:'white' }}
              type="text"
              id="guess_input"
              name="safeAnswer"
              required
            >{this.state.safeAnswer}</div>
            <div
              style={{position:'absolute', marginRight:5, left:112, width: 26, height: 28, background:'white' }}
              type="text"
              id="guess_input"
              name="safeAnswer2"
              required
            >{this.state.safeAnswer2}</div>
            <div
              style={{ position:'absolute', left:140, width: 26, height: 28, background:'white' }}
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
        <div id="circleCursor" ref="circleCursor"></div>
      </div>
    )
  }
}
export default Canvas