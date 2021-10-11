var numero = 1
{
    let numero = 2
    console.log('dentro =',numero)
}
console.log('fora =',numero)

//Let em LOOP
const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()