function calculaPrecoTotal(quantidade) {
 let preço
 if (quantidade >= 12) {
   preço = quantidade*1
    return preço
 } else {
   preço = quantidade*1.3 
   return preço
 }
}