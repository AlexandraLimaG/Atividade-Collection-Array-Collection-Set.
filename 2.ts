import leia from 'readline-sync'

let numeros: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let encontrar = leia.question("Digite o numero que voce deseja encontrar: ")

let indice = -1
let contador = 0

while (contador < numeros.length) {
    if (numeros[contador] == Number(encontrar)) {
        indice = contador;
    }
    contador++
}

if (indice < 0) {

    console.log(`O número ${encontrar} não foi encontrado! `)
} else {

    console.log(`O número ${encontrar} está localizado na posição: ${indice}`);

}
