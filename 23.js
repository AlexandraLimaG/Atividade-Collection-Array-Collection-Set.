const leia = require('readline');

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

const numero = parseInt(prompt("Digite o número que você deseja encontrar:"));

let encontrado = false;
let posicao = -1;

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] === numero) {
    encontrado = true;
    posicao = i;
    break;
  }
}

if (encontrado) {
  console.log(`O número ${numero} está localizado na posição: ${posicao}`);
} else {
  console.log(`O número ${numero} não foi encontrado!`);
}

