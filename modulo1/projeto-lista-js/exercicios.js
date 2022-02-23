// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// // EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// // EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(nu1, nu2) {
  let num1 = Number(prompt("Digite a base"));
  let num2 = Number(prompt("Digite a altura"));
  let calculo = num1 * num2;
  console.log(calculo);
  return calculo;
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Em qual ano estamos?"));
  let anoNasc = Number(prompt("Em que ano você nasceu?"));
  console.log(anoAtual - anoNasc);
  return anoAtual - anoNasc;
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual o seu nome?");
  let idade = prompt("Quantos anos você tem?");
  let email = prompt("Digite aqui seu melhor e-mail");
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  array = [];
  let cor1 = prompt("Digite aqui sua cor favorita");
  array.push(cor1);
  let cor2 = prompt("Digite aqui outra cor favorita");
  array.push(cor2);
  let cor3 = prompt("Digite aqui mais uma cor favorita");
  array.push(cor3);
  console.log(array);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() == string2.toLowerCase();
}