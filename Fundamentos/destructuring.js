// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 15,
    enderecp: {
        logradouro: 'Rua 45',
        numero: 15
    }
}

console.log(pessoa)
const { nome, idade} = pessoa // tire de dentro do objeto o atributo nome e idade e faça duas variaveis
console.log(pessoa) // continua completa
console.log(nome, idade) // criou as duas variaveis q tinha na pessoa ana

const { nome: n, idade: i} = pessoa
console.log(n,i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome,bemHumorada)


// Destructuring em array
const [a] = [10]
console.log(a)

const [n1, , n3 , n5 , n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, numero]] = [ [, 8, 8], [9, 6, 8]] // pega somente o 2° item do 2° array e salva em numero
console.log(numero)

// com objeto

function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {
    max: 50,
    min: 40
}
console.log(rand(obj))
console.log(rand({max: 50, min: 55}))
console.log(rand({}))



// com array

function rand2([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
}

console.log('Resultado: ', rand([50, 40]))
console.log(rand2([992]))
console.log(rand2([, 10]))
console.log(rand2([]))