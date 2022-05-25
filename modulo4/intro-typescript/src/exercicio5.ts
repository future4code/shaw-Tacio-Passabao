function checaRenovacaoRG(
  anoAtual: number,
  anoNascimento: number,
  anoEmissao: number
): string {
  let idade: number = anoAtual - anoNascimento;
  let tempoCarteira: number = anoAtual - anoEmissao;
  if (idade <= 20 && tempoCarteira >= 5) {
    return "Renovação permitida";
  } else if (idade > 20 && idade <= 50 && tempoCarteira >= 10) {
    return "Renovação permitida";
  } else if (idade > 50 && tempoCarteira >= 15) {
    return "Renovação permitida";
  } else {
    return "Renovação não permitida";
  }
}

console.log(checaRenovacaoRG(2020, 2010, 2016));