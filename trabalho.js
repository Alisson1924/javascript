const ask = require('readline-sync')

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

let sustentaMenu = true

while (sustentaMenu) {
    console.clear()
    console.log(`
[1] - Converter de Celsius para Fahrenheit
[2] - Converter de Fahrenheit para Celsius
[0] - Sair
    `)

    let temperatura = Number(ask.question(`Escolha uma opcao:`))

    console.clear()
    switch (temperatura) {
        case 1:
            let celsius = Number(ask.question("Digite a temperatura em Celsius: "))
            if (celsius) {
                let fahrenheit = celsiusParaFahrenheit(celsius)
                console.log(fahrenheit)
            }
            break
        case 2:
            let fahrenheit = Number(ask.question("Digite a temperatura em Fahrenheit: "))
            if (fahrenheit) {
                let celsiusConvertido = fahrenheitParaCelsius(fahrenheit)
                console.log(celsiusConvertido)
            }
            break
        case 0:
            sustentaMenu = false
            break
        default:
            console.log('temperatura não encontrada')
            break
    }

    ask.question(`Pressione ENTER para continuar...`)

}
