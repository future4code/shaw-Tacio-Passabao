function criarArrayNomesAnimais() {
const animais = [
{ nome: "Cachorro", classificacao: "mamífero" },
{ nome: "Papagaio", classificacao: "ave" },
{ nome: "Gato", classificacao: "mamífero" },
{ nome: "Carpa", classificacao: "peixe" },
{ nome: "Pomba", classificacao: "ave" }
]

let animaisNome = animais.map(function(item, index){
return item.nome

})
return animaisNome
}
