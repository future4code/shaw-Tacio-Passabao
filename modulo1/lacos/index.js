//Interpretação 1
// O código está pegando uma variável de valor 0 e acrescentando +i nela por 5 vezes (i0 até i4).
// Será impresso 10 no console.

//Interpretação 2
// 19, 21, 23, 25, 27, 30

//B Aparentemente, não, mas podemos utlilizar o for of .entries, como descrito abaixo, para acessar seu valor e sua posição no índice
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista.entries()) {
//     console.log(numero)
// 	}

//Interpretação 3
// *
// **
// ***
// ****

//Escrita 1

// let quantidadePet = Number(prompt("Quantos pets você possui?"))
// let quantidadeTotal = 0
// let arrayBichos = []
// let controle = 0
// if (quantidadePet === quantidadeTotal){
//     console.log("Que pena, você pode adotar um pet!")
// } else {
// while (controle < quantidadePet){
//     arrayBichos.push(prompt("Digite aqui o nome do(s) seu(s) pet(s)"))
//     controle++
// }
// console.log(arrayBichos)

//}

//Escrita 2

// let arrayOriginal = [];

// a)

// let i = 0
// while (i < arrayOriginal.length-1){
//     console.log(arrayOriginal[i])
//     i++
// }

// b)

// let i = 0
// while (i < arrayOriginal.length-1){
//     console.log(arrayOriginal[i]/10)
//     i++
// }

// c)

// let novoArray = []
// let i = 0
// while (i < arrayOriginal.length){
//     if (arrayOriginal[i] % 2 === 0){
//         novoArray.push(arrayOriginal[i])
//     }
//     i++
// }
// console.log(novoArray)

// d)

// let arrayNovo = [];
// let i = 0;
// while (i < arrayOriginal.length) {
//   arrayNovo.push(
//     "O elemento do index" + " " + i + " " + "é:" + " " + arrayOriginal[i]
//   );
//   i++;
// }
// console.log(arrayNovo);

// e)

// let valorMaior = 0;
// let valorMenor = 99999;
// let comparaValor = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > valorMaior) {
//       valorMaior = array[i];
//     }
//   }
//   console.log(`O maior valor no array é ${valorMaior}`);

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < valorMenor) {
//       valorMenor = array[i];
//     }
//   }
//   console.log(`O menor valor no array é ${valorMenor}`);
// };
// comparaValor(arrayOriginal);