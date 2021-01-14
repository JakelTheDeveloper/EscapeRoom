
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
    cursor:'pointer'
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
let GameObjects = {
    redGuy,
    moveBtn,
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
    inventoryHolder
}


export default GameObjects
