import * as sound from './sounds.js'
export const sounds = document.getElementById('sounds')

let selectedButton = null

sounds.addEventListener('click', (event) => {
    const clickedButton = event.target.closest('button')
    if (!clickedButton) return

    const action = clickedButton.dataset.action

    if (selectedButton && selectedButton !== clickedButton) {
        selectedButton.classList.remove('select')
        sound[selectedButton.dataset.action].pause()
    }

    clickedButton.classList.toggle('select')
    if (clickedButton.classList.contains('select')) {
        sound[action].play()
        selectedButton = clickedButton
    } else {
        sound[action].pause()
        selectedButton = null
    }
})
