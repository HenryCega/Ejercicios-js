'use strict'

//   puntuaciones
const puntuaciones = [
    {
        equipo: 'Toros Negros',
        puntos: [1, 3, 4, 2, 10, 8],
    },
    {
        equipo: 'Amanecer Dorado',
        puntos: [8, 5, 2, 4, 7, 5, 3],
    },
    {
        equipo: 'Águilas Plateadas',
        puntos: [5, 8, 3, 2, 5, 3],
    },
    {
        equipo: 'Leones Carmesí',
        puntos: [5, 4, 3, 1, 2, 3, 4],
    },
    {
        equipo: 'Rosas Azules',
        puntos: [2, 1, 3, 1, 4, 3, 4],
    },
    {
        equipo: 'Mantis Verdes',
        puntos: [1, 4, 5, 1, 3],
    },
    {
        equipo: 'Ciervos Celestes',
        puntos: [3, 5, 1, 1],
    },
    {
        equipo: 'Pavos Reales Coral',
        puntos: [2, 3, 2, 1, 4, 3],
    },
    {
        equipo: 'Orcas Moradas',
        puntos: [2, 3, 3, 4],
    },
]


let maxTeam = ''
let maxPoint = 0
let minTeam = puntuaciones[0].equipo
// console.log(minTeam)
let minPoint = puntuaciones[0].puntos.reduce((prev, acc) => prev + acc, 0)
// console.log(minPoint)
let total

const results = (data) => {
    data.forEach(result => {
        const totalAcc = (acc, curr) => acc + curr
        total = result.puntos.reduce(totalAcc, 0)
        if (total > maxPoint) {
            maxPoint = total
            maxTeam = result.equipo
        } else if (total <= minPoint) {
            minPoint = total
            minTeam = result.equipo
        }
    })
    console.log(`El equipo con mas puntos es ${maxTeam} con un total de ${maxPoint} puntos`)
    console.log(`El equipo con menos puntos es ${minTeam} con un total de ${minPoint} puntos`)
}

results(puntuaciones)
