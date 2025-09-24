
let paisA = 80000;
let paisB = 200000;

const taxaA = 0.03;
const taxaB = 0.015;

let anos = 0;

while (paisA < paisB) {
  paisA = paisA + (paisA * 0.03);
  paisB = paisB + (paisB * 0.015);
  anos++
}

console.log("Será necessário " + anos + "anos para que o país A alcance o país B")

