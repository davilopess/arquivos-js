//console.log(typeof Object)

//class Produto {}
//console.log(typeof Produto)

//Funcao sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,10,3,2,5,4)
imprimirSoma()

//funcao com retorno
function soma(a,b = 1){
    return a+b
}
console.log(soma(1,3))
console.log(soma(2))
console.log(soma())


//armazenando uma funcao numa variavel
const imprimirSominha = function(a,b){
    console.log(a+b)
}
imprimirSominha(2,3)

//Armazenando uma funcao arrow em uma variavel
const sominha = (a,b) => {
    return a+b
}

console.log(sominha(2,3))
const subtracao = (a,b) => a-b
console.log(subtracao(5,3))
let eduarda = 'eduarda'
const imprimir2 = a => console.log(a)
imprimir2(eduarda)