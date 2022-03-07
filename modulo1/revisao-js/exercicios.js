// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  return array;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayPar = [];
  for (let valor of array) {
    if (valor % 2 === 0) {
      arrayPar.push(valor);
    }
  }
  return arrayPar;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let arrayQuadrado = [];
  for (let value of array) {
    if (value % 2 === 0) {
      arrayQuadrado.push(value * value);
    }
  }
  return arrayQuadrado;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let comparador = 0;
  for (let valor of array) {
    if (valor > comparador) {
      comparador = valor;
      console.log(comparador);
    }
  }
  return comparador;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = 0
  let maiorDivisivelPorMenor
  let diferenca = 0
  if (num1 > maiorNumero){
    maiorNumero = num1
  } if (num2 > maiorNumero) {
    maiorNumero = num2
  }
  if (num1 > num2) {
    maiorDivisivelPorMenor = ((num1%num2) === 0)
  } else {
    maiorDivisivelPorMenor = ((num2%num1) === 0)
  }
  if (num1 > num2){
    diferenca = (num1-num2)
  } else {
    diferenca = (num2 - num1)
  }
  return {maiorNumero,maiorDivisivelPorMenor,diferenca}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = []
  if (n === 0){
    return 0
  } else {
    for (i=0; i<n; i++){
if (i % 2 == 0){
numerosPares.push(i)
}
    }
  }
  return numerosPares
} //voltar aqui depois

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  let triangulo
  if (ladoA == ladoB && ladoB == ladoC){
    triangulo = "Equilátero"
  } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
    triangulo = "Isósceles"
  } else {
    triangulo = "Escaleno"
  }
  return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}