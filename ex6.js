function investimento() {
  let capital = parseFloat(prompt("Digite o capital inicial:"));
  let taxa = parseFloat(prompt("Digite a taxa de juros mensal (em %):")) / 100;
  let meses = parseInt(prompt("Digite o tempo do investimento (em meses):"));

  let montante = capital * Math.pow(1 + taxa, meses);

  console.log("Montante final: " + montante.toFixed(2));
}

investimento();