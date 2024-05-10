// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleEnterClick)

// Funções
function handleTryClick(event) {
    event.preventDefault() 

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = "Você acertou em " + xAttemps + " tentativas"
    }

    if(inputNumber.value && Number(inputNumber.value) < 10 && Number(inputNumber.value) >= 0) {
        xAttemps++
    }

    inputNumber.value = ""
}

function handleResetClick() {
    toggleScreen()
    xAttemps = 1

    randomNumber = Math.round(Math.random() * 10)
}

function handleEnterClick(event) {
    if(event.key === 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}