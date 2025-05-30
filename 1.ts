import leia from 'readline-sync'

let contador2: number = 0
let contador3: number = 0

const lista: Array<string> = new Array<string>()

for (let contador = 0; contador < 5; contador++) {

    lista.push(leia.question("Digite uma cor: "))

}

console.log("Lista de todas as cores: ");

while (contador2 < 5) {

    console.log(lista[contador2]);
    contador2++

}

lista.sort((a, b) => a.localeCompare(b));
console.log("Lista de todas as cores ordenadas em ordem crescente: ");

while (contador3 < 5) {

    console.log(lista[contador3]);
    contador3++

}