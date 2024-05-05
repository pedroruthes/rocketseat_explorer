const numberOne = Number(prompt('Insira o primeiro número: '))
const numberTwo = Number(prompt('Insira o segundo número: '))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mul = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert('Resultado da soma: ' + sum)
alert('Resultado da subtração: ' + sub)
alert('Resultado da multiplicação: ' + mul)
alert('Resultado da divisão: ' + div)
alert('Resultado do resto da divisão: ' + restDiv)

if(sum % 2 === 0) {
    alert('Resultado da soma é PAR (' + sum + ')')
} else {
    alert('Resultado da soma é IMPAR (' + sum + ')')
}

if(numberOne === numberTwo) {
    alert('Os números inseridos são iguais')
} else {
    alert('Os números inseridos são diferentes')
}