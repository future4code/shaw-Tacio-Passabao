        //Interpretação de Código 1

// console.log a vai imprimir undefined, visto que nosso vetor não foi declarado
// console.log b vai imprimir null, visto que anulamos o valor do array com o comando array = null
// console.log c vai imprimir 11, dado que ele imprime o tamanho do array
// console.log d vai imprimir 3, pois é a primeira posição do array, definida por i = 0
// console.log e vai substituir o valor da segunda posição do array (para i = 1) (no caso, o 4) pelo valor 19
// console.log f vai imprimir o valor 9, pois é a 7 posição do array, definida por i = 6


        //Interpretação de Código 2
// console.log vai imprimir "SUBI NUM ÔNIBUS EM MIRROCOS 27"

        //Escrita de Código 1

// let nomeUser = prompt("Digite seu nome aqui:")
// let emailUser = prompt(`${nomeUser}, digite seu e-mail aqui`)
// console.log(`O e-mail ${emailUser} foi cadastrado com sucesso. Seja bem-vindo(a) ${nomeUser}`)

        //Escrita de Código 2

// let array1 = ["Pizza", "Hamburguer", "Strogonoff", "Omelete", "Panqueca"]
// let i = 0
// console.log(array1)
// console.log("Minhas comidas favoritas são:\n" ,array1[0], "\n" ,array1[1], "\n" ,array1[2], "\n" ,array1[3], "\n", array1[4]) //Alternativa simples, abaixo alternativa demorada
// console.log("Minhas comidas preferidas são:")
// console.log(array1[0])
// console.log(array1[1])
// console.log(array1[2])
// console.log(array1[3])
// console.log(array1[4])
// let comidaUser = prompt("Digite aqui a sua comida favorita!")
// array1 = ["Pizza," ,comidaUser, "Strogonoff", "Omelete", "Panqueca"]
// console.log(array1)

        //Escrita de Código 3

// let array1 = []
// let listaDeTarefas = array1
// let i = 0
// let tarefaUm = prompt("Digite aqui uma tarefa que você deva realizar hoje:")
// array1.push(tarefaUm)
// let tarefaDois = prompt("Digite aqui outra tarefa que você deva realizar hoje:")
// array1.push(tarefaDois)
// let tarefaTres = prompt("Digite aqui mais uma tarefa a ser realizada hoje:")
// array1.push(tarefaTres)
// console.log(array1)
// let tarefaConcluida1 = Number(prompt("Digite aqui qual tarefa já foi realizada (1, 2 ou 3)"))
// array1.splice(tarefaConcluida1-1, 1)
// console.log(array1)

        //Desafio 1

// let array2 =[]
// inputFrase = prompt("Digite aqui uma frase")
// array2 = inputFrase.split(' ')
// console.log(array2)

        //Desafio 2

// let array3 = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// let i = array3.indexOf("Abacaxi")
// console.log("O índice de Abacaxi é:",array3.indexOf("Abacaxi"))
// console.log("A posição de Abacaxi é:",i+1)
// console.log("O tamanho do vetor é:",array3.length)
