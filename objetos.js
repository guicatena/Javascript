// > OBJETOS

// Como criar um onjeto no JavaScript?

let pessoa = {
    nome: 'Guilherme', 
    idade: 19,
}

console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa.nome)
console.log(pessoa.idade)

// Como adicionar um par chave-valor?

pessoa.altura = 1.61

console.log(pessoa)

// Como remover um par chave-valor?

delete pessoa.altura

console.log(pessoa)

// Como percorrer?

console.clear()

for (let chave in pessoa) {
    console.log(chave)
}