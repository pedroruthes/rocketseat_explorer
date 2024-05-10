// Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const closedCookie = document.querySelector('.fortune-cookie')
const buttonOpenedCookie = document.querySelector('button')
const text = document.querySelector('.card-content p')

const messages = [
    'Procure acender uma vela em vez de almadiçoar a escuridão',
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu'
]

let randomNumber = Math.round(Math.random())

// Eventos
closedCookie.addEventListener('click', handleClosedClick)
buttonOpenedCookie.addEventListener('click', handleResetClick)


// Funções
function handleClosedClick() {
    randomNumber = Math.round(Math.random())
    text.innerText = messages[randomNumber]

    toggleScreen()
}

function handleResetClick() {
    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}