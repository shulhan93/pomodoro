import { alarm } from './alarm.js';
import { state } from './state.js'
const minutesElem = document.querySelector('.time__minutes')
const secondsElem = document.querySelector('.time__seconds')

const showTime = (seconds) => {
    minutesElem.textContent = addZero(Math.floor(seconds / 60))
    secondsElem.textContent = addZero((seconds % 60))
}

const addZero = (num) => {
    if (num < 10) {
        return '0' + 1
    }
    return num
}

export const startTimer = () => {
    state.timeLeft = state.timeLeft - 1;
    showTime(state.timeLeft)

    if (state.timeLeft > 0 && state.isActive) {
        state.timerId = setTimeout(startTimer, 1000)
    }

    if (state.timeLeft == 0) {
        alarm()
    }
}