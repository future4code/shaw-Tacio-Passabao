1 //10 10,5
2 //10, 10, 10
3 //let horasTrabalho valorRecebido



let nome 
let idade
console.log(typeof nome, typeof idade) /*Imprime undefined, 
pois as variáveis são vazias, portanto não dá pra saber 
se são do tipo string, number ou boolean*/
nome = prompt("Qual o seu nome?")
idade = prompt("E qual a sua idade?")
console.log(typeof nome, typeof idade) /* Ambos imprimem string, pois
são valores de texto, e a idade não foi convertida em number*/
console.log("Olá" ,nome,", você tem" ,idade,"anos.")
// Exercício 1 acima



let primeiraPergunta
let segundaPergunta
let terceiraPergunta
primeiraPergunta = prompt("Você está usando uma roupa azul hoje?")
segundaPergunta = prompt("Você entende algo de programação?")
terceiraPergunta = prompt("Você tem, ou teve interesse em estudar Javascript?")
console.log("Você está usando uma roupa azul hoje?",primeiraPergunta,)
console.log("Você entende algo de programação?",segundaPergunta,)
console.log("Você tem, ou teve interesse em estudar Javascript?",terceiraPergunta,)
// Exercício 2 acima

let a = 10
let b = 25
c = a
d = b
a = d
b = c
console.log("O novo valor de A é:",a)
console.log("O novo valor de B é:",b)
//Exercício 3 acima

let primeiroNumero
let segundoNumero
primeiroNumero = Number(prompt("Digite o primeiro número:"))
segundoNumero = Number(prompt("Digite o segundo número"))
console.log("O primeiro número somado ao segundo número resulta em:",primeiroNumero + segundoNumero)
console.log("O primeiro número multiplicado pelo segundo resulta em:",primeiroNumero * segundoNumero)
//Desafio acima

