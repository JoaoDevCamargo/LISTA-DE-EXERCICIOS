let N = parseInt(prompt("Quantos números você deseja digitar?"));
let numero = parseInt(prompt("Digite o 1º número:"));

let menor = numero;
let maior = numero;
let soma = numero;

for (let i = 2; i <= N; i++) {
  numero = parseInt(prompt("Digite o " + i + "º número:"));
  soma = soma + numero;
  if (numero < menor) {
    menor = numero;
  }
  if (numero > maior) {
    maior = numero;
  }
}

console.log("Menor valor: " + menor);
console.log("Maior valor: " + maior);
console.log("Soma dos valores: " + soma);