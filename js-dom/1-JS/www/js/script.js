

const createPass = () => {
    const pass = Math.round(Math.random() * 100)
    console.log(pass)
    for (let i = 0; i < 5; i++) {
        const passTry = prompt('Introduce numero entre 0 y 100')
        if (pass === +passTry) {
            alert('HAS GANADO 🥳 🥳 🎉  🎊')
            break
        } else {
            if (pass < +passTry) {
                alert('PRUEBA UN NUMERO MAYOR')
            }  else {
                alert('PRUEBA UN NUMERO MENOR')
            }
        }
        if (i === 4) {
            alert('HAS PERDIDO 😞 😒 😒')
        }
    }
}

createPass()