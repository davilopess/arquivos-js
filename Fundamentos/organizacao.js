const escola = ' mano e danie? //--*!!aquele filha da puta ';

console.log(escola.replace(/\w/g, '*'));

// Array retornado: ["João", "da", "Silva", "Oliveira"]
stringExemplo = "João da Silva Oliveira";
resultado = stringExemplo.split(" ");
console.log(resultado)

resultado.forEach(element => {
    const numero = element.length
    console.log(numero)
});