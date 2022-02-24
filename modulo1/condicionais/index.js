// Interpretação de Código 1
// a) O código recebe um input do user e divide o input por 2 e confere o resto. Se o número
// passar no teste, significa que ele é par, caso contrário, é um número ímpar.
// b) Números pares
// c) Números ímpares.

// Interpretação de Código 2
// a) O código serve para retornar no console o valor de determinada fruta selecionada,
// caso nenhuma fruta declarada seja escolhida, retorna o valor padrão da fruta, que é 5 reais
// b) "O preço da fruta Maçã é R$ 2.25"
// c) "O preço da fruta Pêra é R$ 5.5"

//Interpretação de Código 3
// a) Pedindo para o usuário dar o input de um número (em string) e convertendo ele pra um número
// b) Se ele digitar 10, será escrito "Esse número passou no teste"
//    Se digitar o número -10, nada será escrito
// c) Dará erro, pois a mensagem é uma variável de bloco "filho" não sendo acessado em blocos
// externos, se o console.log estivesse dentro do if, nenhum erro aconteceria

//Escrita de Código 1

// let idadeUser = Number(prompt("Digite aqui sua idade."));
// if (idadeUser >= 18) {
//   console.log("Você pode dirigir!");
// } else {
//   console.log("Você ainda não pode dirigir");
// }

//Escrita de Código 2

// let turnoUser = prompt(
//   "Digite aqui seu turno de estudo. (M se for Matutino, V se for Vespertino, N se for Noturno)"
// );
// turnoUser.toLowerCase();
// if (turnoUser == "m") {
//   console.log("Bom dia, aluno(a)!");
// } else if (turnoUser == "v") {
//   console.log("Boa tarde, aluno(a)!");
// } else {
//   console.log("Boa noite, aluno(a)!");
// }

//Escrita de Código 3

// let turnoUser = prompt(
//   "Digite aqui seu turno de estudo. (M se for Matutino, V se for Vespertino, N se for Noturno)"
// );
// turnoUser.toLowerCase();
// switch (turnoUser) {
//   case "m":
//     console.log("Bom dia!");
//     break;
//   case "v":
//     console.log("Boa tarde!");
//     break;
//   default:
//     console.log("Boa noite!");
//     break;
// }

//Escrita de Código 4

// let genero = prompt("Qual o genêro do filme a ser assistido?");
// let ingresso = Number(prompt("Qual o valor do ingresso?"));
// genero.toLowerCase();

// if (genero === "fantasia" && ingresso < 15) {
//   console.log("Bom filme!");
// } else {
//   console.log("Escolha outro filme, por favor :(");
// }

//Desafio 1

// let genero = prompt("Qual o genêro do filme a ser assistido?");
// let ingresso = Number(prompt("Qual o valor do ingresso?"));
// genero.toLowerCase();

// if (genero === "fantasia" && ingresso < 15) {
//   let snack = prompt("Qual lanche você vai comprar para assistir o filme?");
//   console.log(`Bom filme, e aproveite seu ${snack}!`);
// } else {
//   console.log("Escolha outro filme, por favor :(");
// }