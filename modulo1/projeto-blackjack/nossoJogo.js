/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// console.log("Boas vindas ao jogo de Blackjack!");
// if (confirm("Deseja jogar uma rodada?")) {
//   let carta = comprarCarta();
//   let carta1 = comprarCarta();
//   let totalp1 = carta.valor + carta1.valor;
//   console.log(
//     `Usuário - cartas: ${carta.texto} ${carta1.texto} - Pontuação ${totalp1}`
//   );
//   let carta2 = comprarCarta();
//   let carta3 = comprarCarta();
//   let totalp2 = carta2.valor + carta3.valor;
//   console.log(
//     `Bot - cartas: ${carta2.texto} ${carta3.texto} - Pontuação ${totalp2}`
//   );
//   if (totalp1 === totalp2) {
//     console.log("O jogo empatou!");
//   } else if (totalp1 > totalp2) {
//     console.log("O usuário venceu!");
//   } else {
//     console.log("O bot venceu!");
//   }
// } else {
//   console.log("O jogo foi encerrado pelo jogador.");
// }
