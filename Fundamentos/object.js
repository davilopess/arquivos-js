
// const prod1 = {}
// prod1.nome = "alo"
// prod1.preco = 32322.22

// console.log(prod1)


// function aprovado(nota) {
//     if (nota > 7) {
//         console.log("Aprovado")
//     }
// }

// aprovado(9) 

// const pessoa = {
//     nome: "Davi",
//     peso: 65,
//     idade: 21
// }

// for (atributos in pessoa) {
//     console.log(`${atributos} = ${pessoa[atributos]}`)
// }

// function soma(a, b) {
//     console.log(arguments)
//     return function (c) {
//         console.log(a + b + c)

//     }
// }

// soma(3, 4)(10)

// function Pessoa() {
//     this.idade = 0
//     setInterval(function () {
//         this.idade++
//         console.log(this.idade)

//     }.bind(this), 100);
// }
// xdxdnhnh 
// new Pessoa


// const soma = function (x, y) {
//     return x + y
// }

// const ImprimirR = function (a, b, operacao = soma) {
//     console.log(operacao(a, b))
// }

// ImprimirR(3, 4, function (a, b) {
//     return a - b
// })


// const notasBaixas = notas.filter(nota => nota < 7)

// console.log(notasBaixas)

// const x = 'Global'
// const soma = function (x, y) {
//     return x + y
// }

// //const x = 'Global'

// function fora() {
//     //const x = 'local'
//     //function dentro() {
//     //    return x
//     //}
//     return x
// }

// const minhaFuncao = fora()
// console.log(minhaFuncao)

// function Kit(dichavador, isqueiro, seda, ) {
//     return {
//         dichavador,
//         isqueiro,
//         seda,

//         bolar() {
//             return console.log('Bolando...')

//         }
//     }
// }
// const nome = 'davi';
// const email = '@hotmail.com';
const nome = 'davi';
const data = {
    nome,
    email: '@ghotmaksdl'
}


console.log(data.nome);
console.log(data);
// const beck = Kit('Granada', 'Bic', 'Seda c/ piteira')
// console.log(beck)
// beck.dichavador = 'oloco'
// console.log(beck)
// Object.freeze(beck)

// const pai = { nome: 'DAVI', corDoCabelo: 'preto' }
// const filha = Object.create(pai)

// const filha2 = Object.create(pai, {
//     nome: { value: 'Bia', writable: false, enumerable: true }
// })



// for (let key in filha2) {
//     filha2.hasOwnProperty(key) ?
//         console.log(key) : console.log(`Por heranca: ${key}`)




// const vetor = [1, 32, 3, 2]
// vetor.forEach(ele => {
//     ele = ele + "10"
// })
// console.log(vetor)
// const notas = [7.0, 6.0, 5.5, 10.0, 3.4]
// notas.forEach(nota => {
//     console.log(nota)
//     nota = nota + 10

// })
// console.log(notas)
