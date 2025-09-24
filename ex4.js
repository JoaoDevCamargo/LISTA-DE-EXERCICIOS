let salario = 1000;
let aumento = 0.0015;

for (let ano = 1996; ano <= 2025; ano++) {
  salario = salario + (salario * aumento);
  aumento = aumento * 2;
}

console.log("Salário atual: R$ " + salario);

// 2 VERSÃO:

let salario = parseFloat(prompt("Digite o salário inicial do funcionário:"));
let aumento = 0.0015;

for (let ano = 1996; ano <= 2025; ano++) {
  salario = salario + (salario * aumento);
  aumento = aumento * 2;
}

console.log("Salário atual: R$ " + salario);