
const redGuy = {
    position: 'absolute',
    left: 740,
    top: 260,
    width: 40,
    height: 40,
    fontSize: 20,
    color: 'white',
    borderRadius: 50,
    backgroundColor: 'red'
}
const moveBtn = {
    width: 70,
    height: 70,
    borderRadius: 50,
    color:'white',
    backgroundColor: 'red',
    cursor:'none'
}
const backBtn = {
    position:'absolute',
    top:262,
    left: 655,
    width: 40,
    height: 40,
    borderRadius: 50,
    color:'white',
    backgroundColor: 'green',
    cursor:'none'
}

//Objects
const door = {
    position : 'absolute',
    top: 56,
    left:720
}
const rug = {
    position : 'absolute',
    top: 122,
    left:705
}
const lamp = {
    position : 'absolute',
    top: 75,
    left:610
}
const table = {
    position : 'absolute',
    top: 330,
    left:860
}
const dresser = {
    position : 'absolute',
    top: 90,
    left:920
}
const cabinet = {
    position : 'absolute',
    top: 370,
    left:760
}
const toolBox = {
    position : 'absolute',
    top: 362,
    left:775
}
const shelf = {
    position : 'absolute',
    top: 80,
    left:495
}
const couch = {
    position : 'absolute',
    top: 305,
    left:545
}
const stool = {
    position : 'absolute',
    top: 250,
    left:560
}
const trash = {
    position : 'absolute',
    top: 250,
    left:960
}
const safe = {
    position : 'absolute',
    top: 250,
    left:1020
}
const picture = {
    position : 'absolute',
    top: 250,
    left:1020
}
const combLock = {
    position : 'absolute',
    top: 90,
    left:796
}
const boltLock = {
    position : 'absolute',
    top: 105,
    left:796
}
const keyLock = {
    position : 'absolute',
    top: 105,
    left:794
}
const papers = {
    position : 'absolute',
    top: 355,
    left:930
}
const book = {
    position : 'absolute',
    top: 350,
    left:990
}
const inventoryHolder = {
    position : 'absolute',
    top: 420,
    left:460
}
const glove = {
    position : 'absolute',
    top: 230,
    left:518
}
const crowBar = {
    position : 'absolute',
    top: 285,
    left:1030
}
const bobbyPin = {
    position : 'absolute',
    top: 350,
    left:890
}
const screwDriver = {
    position : 'absolute',
    top: 365,
    left:785
}
const screw_inventory = {
    position : 'absolute',
    top: 433,
    left:477
}
const bobbyPin_inventory = {
    position : 'absolute',
    top: 433,
    left:518,
    width:16,
    height:16
}
const bulb_inventory = {
    position : 'absolute',
    top: 427,
    left:557,
}
const glove_inventory = {
    position : 'absolute',
    top: 430,
    left:592,
}
const crowBar_inventory = {
    position : 'absolute',
    top: 427,
    left:640,
}
const key_inventory = {
    position : 'absolute',
    top: 432,
    left:717,
}
const screwDriver_inventory = {
    position : 'absolute',
    top: 437,
    left:667,
}

let GameObjects = {
    redGuy,
    moveBtn,
    backBtn,
    table,
    papers,
    book,
    door,
    combLock,
    boltLock,
    keyLock,
    dresser,
    cabinet,
    toolBox,
    shelf,
    couch,
    stool,
    lamp,
    rug,
    trash,
    safe,
    picture,
    inventoryHolder,
    glove,
    crowBar,
    bobbyPin,
    screwDriver,
    screw_inventory,
    bobbyPin_inventory,
    bulb_inventory,
    glove_inventory,
    crowBar_inventory,
    screwDriver_inventory,
    key_inventory
}


export default GameObjects
