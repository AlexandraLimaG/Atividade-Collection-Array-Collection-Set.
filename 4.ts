import leia from 'readline-sync'

let lista: Set<number> = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);
let encontrar = Number(leia.question("Digite numero que quer encontrar: "))


if (lista.has(encontrar)) {

    console.log(`O número ${encontrar} foi encontrado! `)

}

else {

    console.log(`O número ${encontrar} não foi encontrado!`)

}