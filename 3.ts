import leia from 'readline-sync'

let lista: Set<number> = new Set();

for (let i = 0; i < 10; i++) {

    lista.add(Number(leia.question("Digite um numero: ")));

}

console.log('listar dados das lista: ')

for (const numero of lista) {

    console.log(numero);

}
