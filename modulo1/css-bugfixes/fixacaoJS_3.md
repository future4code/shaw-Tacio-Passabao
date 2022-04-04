function calculaNota(ex, p1, p2) {
  let conceito
  let notaFinal = (ex*1 + p1*2 + p2*3)/(1+2+3)
  if (notaFinal >= 9){
    conceito = "A"
    return conceito
  } else if (notaFinal < 9 && notaFinal >= 7.5){
    conceito = "B"
    return conceito
  } else if (notaFinal < 7.5 && notaFinal >= 6){
    conceito = "C"
    return conceito
  } else {
    conceito = "D"
    return conceito
  }
  }