// COERÇÃO (CONVERSÃO) DE TIPOS

// - 1. Coerção Explícita (Manual)
const numero = 10

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String (numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('25865'))
console.log(parseFloat('5646134625.234'))
console.log(parseInt('5646134625.234'))
//UTILIZAR NUMBER PREFERENCIALMENTE!!
console.log(Boolean(5612))
console.log(Boolean(0))

console.clear()

// - 2. Coerção Implícita (Automática)

console.log('10' + 1)
console.log('10' - 1)
console.log(10 * '3')
console.log(10 - 'asasa')

// Outros exemplos

// Qual será a saída desse código?
let n = 1 + "1" // '11'

n = n - 1

console.log(n)

// Qual será a saída desse código?
console.log(2 + 3 + 4 + "5")

// Qual será a saída desse código?
console.log("5" + 2 + 3 + 4)

// Qual será a saída desse código?
console.log("10" - "4" - "3" - "2" + "5")

