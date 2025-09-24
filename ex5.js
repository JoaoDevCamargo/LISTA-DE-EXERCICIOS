function circulo() {
  let raio = parseFloat(prompt("Digite o raio do círculo:"));
  let area = 3.14 * raio * raio;
  let perimetro = 2 * 3.14 * raio;
  
  console.log("Área do círculo: " + area);
  console.log("Perímetro do círculo: " + perimetro);
}

circulo();