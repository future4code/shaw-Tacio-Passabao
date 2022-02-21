//Interpretação 1

// Será impresso:
// Matheus Nachtergaele
// Virinia Cavendish
// canal: "Globo", horário "14h"

//Interpretação 2

// a)
// {nome: "Juca", idade: 3, raca: "SRD"}
// {nome: "Juba", idade: 3, raca: "SRD"}
// {nome: "Jubo", idade: 3, raca: "SRD"}

// b) Faz um espelhamento do objeto, chamando-o e alterando propriedades desejadas, criando
//uma cópia alterada do objeto

//Interpretação 3

// a)
// false
// undefined

// b) false, pois o Caio não é um backender, undefined pois a propriedade altura não foi definida

//Escrita 1

// let pessoa1 = {
//   nome: "Diego Menechelli",
//   apelidos: ["Daigon", "Xuxa", "Diguin"],
// };
// let printPessoa = function () {
//   console.log(
//     `Oi, eu sou o ${pessoa1.nome}, mas pode me chamar de ${pessoa1.apelidos[0]}, ${pessoa1.apelidos[1]}, ou ${pessoa1.apelidos[2]}`
//   );
// };
// printPessoa(pessoa1);

// pessoa1 = {
//   ...pessoa1,
//   apelidos: ["Diego Meneguel", "Xuxinha", "HOMI"],
// };
// printPessoa(pessoa1);

//Escrita 2

// let info1 = {
//   nome: "Tácio",
//   idade: 22,
//   profissao: "Bartender",
// };
// let info2 = {
//   nome: "Diego",
//   idade: 28,
//   profissao: "Programador",
// };
// let vetorPessoa = function () {
//   console.log([
//     info1.nome,
//     info1.nome.length,
//     info1.idade,
//     info1.profissao,
//     info1.profissao.length,
//   ]);
//   console.log([
//     info2.nome,
//     info2.nome.length,
//     info2.idade,
//     info2.profissao,
//     info2.profissao.length,
//   ]);
// };
// vetorPessoa();

//Escrita 3

// let carrinho = [];
// let fruta1 = {
//   nome: "Melancia",
//   disponibilidade: true,
// };
// let fruta2 = {
//   nome: "Tangerina",
//   disponibilidade: true,
// };
// let fruta3 = {
//   nome: "Abacaxi",
//   disponibilidade: true,
// };
// let compra = function (fruta1, fruta2, fruta3) {
//   carrinho.push(`${fruta1.nome} - ${fruta1.disponibilidade}`);
//   carrinho.push(`${fruta2.nome} - ${fruta2.disponibilidade}`);
//   carrinho.push(`${fruta3.nome} - ${fruta3.disponibilidade}`);
//   console.log(carrinho);
// };
// compra(fruta1, fruta2, fruta3);

//Desafio 1

// let funcao = function () {
//   nome = prompt("Qual o seu nome?");
//   idade = prompt("Qual a sua idade?");
//   profissao = prompt("Qual a sua profissão?");

//   let pessoa1 = {
//     nome: nome,
//     idade: idade,
//     profissao: profissao,
//   };
//   console.log(pessoa1);
//   console.log(typeof pessoa1);
// };
// funcao();

//Desafio 2

// let comparaFilme = function () {
//   let filme1 = {
//     nome: "Rocky 1",
//     anoLancamento: 1976,
//   };
//   let filme2 = {
//     nome: "Star Wars",
//     anoLancamento: 1977,
//   };
//   let comparaLancamento = filme1.anoLancamento < filme2.anoLancamento;
//   let comparaLancamento2 = filme1.anoLancamento === filme2.anoLancamento;
//   console.log(
//     "O primeiro filme foi lançado antes do segundo?",
//     comparaLancamento
//   );
//   console.log(
//     "O primeiro filme foi lançado no mesmo ano do segundo?",
//     comparaLancamento2
//   );
// };
// comparaFilme();

//Desafio 3

// let carrinho = [];
// let fruta1 = {
//   nome: "Melancia",
//   disponibilidade: true,
// };
// let fruta2 = {
//   nome: "Tangerina",
//   disponibilidade: true,
// };
// let fruta3 = {
//   nome: "Abacaxi",
//   disponibilidade: true,
// };
// let compra = function (fruta1, fruta2, fruta3) {
//   carrinho.push(`${fruta1.nome} - ${fruta1.disponibilidade}`);
//   carrinho.push(`${fruta2.nome} - ${fruta2.disponibilidade}`);
//   carrinho.push(`${fruta3.nome} - ${fruta3.disponibilidade}`);
//   console.log(carrinho);
// };
// compra(fruta1, fruta2, fruta3);
// let inverso = function (fruta1, fruta2, fruta3) {
//   carrinho = [];
//   carrinho.push(`${fruta1.nome} - ${!fruta1.disponibilidade}`);
//   carrinho.push(`${fruta2.nome} - ${fruta2.disponibilidade}`);
//   carrinho.push(`${fruta3.nome} - ${fruta3.disponibilidade}`);
//   console.log(carrinho);
// };
// inverso(fruta1, fruta2, fruta3);
