const body = document.querySelector('body')
// console.log(body)

const div = document.createElement('div')
// console.dir(div)


const checkTime = (i) => {
    if (i < 10) {
        i = '0' + i
    }
    return i
}

const crearReloj = () => {
    let horaActual = new Date()
    let hr= horaActual.getHours()
    let min = horaActual.getMinutes()
    let seg = horaActual.getSeconds()
    hr = checkTime(hr)
    min = checkTime(min)
    seg = checkTime(seg)
    const hora = `${hr}:${min}:${seg}`
    div.innerHTML = hora
}

setInterval(() => {
    crearReloj()
}, 1000)

body.appendChild(div)