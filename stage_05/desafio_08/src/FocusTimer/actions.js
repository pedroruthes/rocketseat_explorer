import state from './state.js'
import * as timer from './timer.js'

export function togglePlay() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')

    timer.updateDisplay()
}

export function add() {
    state.seconds += 5
    timer.updateDisplay()
}

export function sub() {
    if(state.seconds < 5) {
        return
    }

    state.seconds -= 5
    timer.updateDisplay()
}