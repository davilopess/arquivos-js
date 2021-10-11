const notas = [7.7,8.9,6.3,9.2]
console.log(notas[0],notas[3])
console.log(notas[4]) //retorna undefined porque o inidice 4 nao existe
notas[4] = 10
console.log(notas[4])
console.log(notas.length)
notas.push({id: 3},false, null, 'teste')
console.log(notas)

console.log(notas.pop())
delete notas[0]
console.log(notas)
console.log(typeof notas)
