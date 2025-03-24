// > FUNÇÕES

// Definição da função

function saudacao() {
    console.log('Olá, seja bem-vindo(a) ao nosso curso de JavaScript!')
}
saudacao()

console.clear()

// Como enviar parametros para as funções?

function saudacao(nome, curso='JavaScript') {
    console.log(`Olá, ${nome}! seja bem-vindo(a) ao nosso curso de ${curso}!`)
}
saudacao('Guilherme')

console.clear()

// Retorno da função

function soma(numero1, numero2){
    console.log('Qualquer coisa')
    return numero1 + numero2
}

const resultado = soma(10, 20)

console.log(resultado / 2)

console.clear()

function maiorDoQue50(numero){
    if (numero > 50){
        return true
    }

    return false
}