function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let quantidade = arrayDeNumeros.filter((v) => (v === numeroEscolhido)).length;
  if (quantidade > 0) {
    let retornoPositivo = `O número ${numeroEscolhido} aparece ${quantidade}x`
    return retornoPositivo
  } else {
    let retornoNegativo = `Número não encontrado`
    return retornoNegativo}
  }
  