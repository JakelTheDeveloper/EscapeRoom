import UIfx from 'uifx'
import dresserSlide from '../SFX/dresser_slide.mp3'
import couchSlide from '../SFX/couch_slide.mp3'
import lightFlick from '../SFX/light_flick.mp3'
import doorOpen from '../SFX/door_open.mp3'
import doorLock from '../SFX/door_lock.mp3'
import boltUnlock from '../SFX/bolt_unlock.mp3'
import tickTock from '../SFX/clock_tick.mp3'
import combinationUnlock from '../SFX/combination_unlock.mp3'

const tickSFX = new UIfx(
    tickTock,
    {
      volume: 0.1, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
  )
const dresserSFX = new UIfx(
    dresserSlide,
    {
      volume: 0.2, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
  )
  const lightSFX = new UIfx(
    lightFlick,
    {
      volume: 0.2, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
  )
  const doorOpenSFX = new UIfx(
    doorOpen,
    {
      volume: 0.2, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
  )
  const doorLockSFX = new UIfx(
    doorLock,
    {
      volume: 0.2, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
  )
  const boltSFX = new UIfx(
    boltUnlock,
    {
      volume: 0.2, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
  )
  const combinationSFX = new UIfx(
    combinationUnlock,
    {
      volume: 0.2, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
  )
  const couchSFX = new UIfx(
    couchSlide,
    {
      volume: 0.2, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
  )
  
let soundObjects = {dresserSFX,couchSFX,lightSFX,doorOpenSFX,doorLockSFX,boltSFX,combinationSFX,tickSFX}

export default soundObjects