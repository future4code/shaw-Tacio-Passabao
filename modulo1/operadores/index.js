// 1. o console.log a. vai imprimir false
//    o console.log b. vai imprimir false
//    o console.log c. vai imprimir true
//    o console.log d. vai imprimir boolean

// 2. Ele não converteu uma variável string em uma variável Number
//    portanto o código irá executar uma soma de string, por exemplo
//    se os dois números digitados forem 5 e 5, o console irá mostrar
//    55, e não 10.

// 3. Utilizar a função Number junto com a prompt. O programa ficaria
//    assim: 
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)



//     ESCRITA DE CÓDIGO: Exercício 1.

// let idadeUser = Number(prompt("Digite sua idade!"))
// let idadeAmigo = Number(prompt("Digite a idade do seu melhor amigo ou melhor amiga!"))
// let diferencaIdade = idadeUser - idadeAmigo
// let idadeComparativa = idadeUser > idadeAmigo

// console.log("Sua idade é maior que a do seu melhor amigo?",idadeComparativa)
// console.log("A diferença de idade entre vocês é",diferencaIdade, "anos")



//     ESCRITA DE CÓDIGO: Exercício 2.
//     Comentário precode: qualquer número par inserido vai retornar um valor igual a 0 no console, qualquer número ímpar vai retornar um valor igual a 1.

// let numeroPar = Number(prompt("Digite um número par"))
// let numeroImpar = Number(prompt("Digite um número ímpar"))
// let divisaoPar = numeroPar % 2
// let divisaoImpar = numeroImpar % 2

// console.log (divisaoPar)
// console.log (divisaoImpar)



//     ESCRITA DE CÓDIGO: Exercício 3

// let idadeUser = Number(prompt("Digite sua idade!"))
// let idadeMeses = idadeUser * 12
// let idadeDias = idadeUser * 365
// let idadeHoras = idadeDias * 24

// console.log("Sua idade é" ,idadeUser, "anos, ou" ,idadeMeses, "meses, ou" ,idadeDias, "dias, ou" ,idadeHoras, "horas.")



//     ESCRITA DE CÓDIGO: Exercício 4

// let numeroPrimeiro = prompt("Digite um número")
// let numeroSegundo = prompt("Digite outro número")
// let primeiraComparacao = numeroPrimeiro > numeroSegundo
// let segundaComparacao = numeroPrimeiro === numeroSegundo
// let terceiraComparacao = (numeroPrimeiro % numeroSegundo) === 0
// let quartaComparacao = (numeroSegundo % numeroPrimeiro) === 0

// console.log("O primeiro número é maior que o segundo?",primeiraComparacao)
// console.log("O primeiro número é igual ao segundo?" ,segundaComparacao)
// console.log("O primeiro número é divisível pelo segundo?" ,terceiraComparacao)
// console.log("O segundo número é divisível pelo primeiro?" ,quartaComparacao)



//     ESCRITA DE CÓDIGO: Exercício Desafio 1

// let farenheit = 77
// let kelvin = (farenheit - 32)*(5/9) + 273.15
// console.log("77º F equivalem à" ,kelvin, "K")

// let celsius = 80
// farenheit = (celsius)*(9/5) + 32
// console.log("80º C equivalem à" ,farenheit, "Fº")

// celsius = 30
// farenheit = (celsius)*(9/5) + 32
// kelvin = (farenheit - 32)*(5/9) + 273.15
// console.log("30º equivalem à" ,farenheit, "Fº, e ",kelvin,"K")

// celsius = Number(prompt("Digite aqui a temperatura, em C"))
// farenheit = (celsius)*(9/5) + 32
// kelvin = (farenheit - 32)*(5/9) + 273.15
// console.log("Esta temperatura equivale à",farenheit,"Fº, e",kelvin,"K")



//      ESCRITA DE CÓDIGO: Exercício Desafio 2

// let valorQWH = 0.05
// let qWH = Number(prompt("Qual o consumo, em QuilloWatt/Hora da sua casa?"))
// let contaDeLuz = qWH * valorQWH
// let descontoConta = contaDeLuz * 0.85

// console.log("O valor da conta de luz de sua residência é:",contaDeLuz,"reais.")
// console.log("O valor da sua conta de luz, após deduções, é:",descontoConta,"reais")



//      ESCRITA DE CÓDIGO: Exercício Desafio 3

// let libra = 20
// let libraQuilo = libra * 0.45359237
// console.log("20lb equivalem à",libraQuilo,"kg")
// let onça = 10.5
// let onçaQuilo = onça * 0.02834952
// console.log("10.5oz equivalem à",onçaQuilo,"kg")
// let milha = 100
// let milhaMetro = milha * 1609.344
// console.log("100mi equivalem à",milhaMetro,"m")
// let pes = 50
// let pesMetro = pes / 3.2808
// console.log("50ft equivalem à",pesMetro,"m")
// let galao = 103.56
// let galaoLitro = galao * 3.785411784
// console.log("103.56gal equivalem à",galaoLitro,"l")
// let xic = 450
// let xicLitro = xic * (6/25)
// console.log("450xic equivalem à",xicLitro,"l")

// let conversaoUnidade = Number(prompt("Digite a quantidade de milhas que deseja converter para metros!"))
// milhaMetro = conversaoUnidade * 1609.344
// console.log(conversaoUnidade,'milhas equivalem à',milhaMetro,'metros')