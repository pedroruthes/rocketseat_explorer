let students = [
    {
        name: 'João',
        n1: 5.6,
        n2: 9.0
    },
    {
        name: 'Letícia',
        n1: 3.5,
        n2: 5.5
    },
    {
        name: 'Julia',
        n1: 9.4,
        n2: 8.2
    },
    {
        name: 'Pedro',
        n1: 3.2,
        n2: 9.8
    }
]

const average = (n1, n2) => {
    return ((n1 + n2) / 2).toFixed(2)
}

for(let student of students) {
    const averageStudent = average(student.n1, student.n2)
    const averageText = `A média do(a) aluno(a) ${student.name} é: ${averageStudent} ${'\n'}`

    if(averageStudent >= 7) {
        alert(averageText + `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
    } else {
        alert(averageText + `Não foi dessa vez, ${student.name}! Tente novamente!`)
    }
}