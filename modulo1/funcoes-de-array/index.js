// Interpretação 1

// {Nome: Amanda Rangel, apelido: Mandi} 0 [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
// {nome: Laís Petra, apelido: Laura} 1 [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
// {nome: Letícia Chijo, apelido: Chijo} 2 [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

// Interpretação 2

//["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

// Interpretação 3

//[{nome: "Amanda Rangel", apelido: "Mandi"}]
//[{nome: "Laís Petra", "apelido: Laura"}]

// Escrita Código 1

// let pets = [
//   { nome: "Lupin", raca: "Salsicha" },
//   { nome: "Polly", raca: "Lhasa Apso" },
//   { nome: "Madame", raca: "Poodle" },
//   { nome: "Quentinho", raca: "Salsicha" },
//   { nome: "Fluffy", raca: "Poodle" },
//   { nome: "Caramelo", raca: "Vira-lata" },
// ];

// let petsNome = pets.map((pets) => {
//   return pets.nome;
// });
// console.log(petsNome);

// let petsRaca = pets
//   .filter((pets) => {
//     return pets.raca === "Salsicha";
//   })
//   .map((pets) => console.log(pets));

// let arrayDesconto = [];
// let petPoodle = pets
//   .filter((pets) => {
//     return pets.raca === "Poodle";
//   })
//   .map((pets) =>
//     arrayDesconto.push(
//       `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`
//     )
//   );
// console.log(arrayDesconto);

//Escrita Código 2

// const produtos = [
//   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//   { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
//   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
// ];

// let prodNome = produtos.map((produtos) => {
//   return produtos.nome;
// });
// console.log(prodNome);

// let arrayDesc = [];
// let prodDesc = produtos.map((produtos) => {
//   arrayDesc.push(
//     produtos.nome + " " + produtos.categoria + " " + produtos.preco * 0.95
//   );
//   return produtos.preco * 0.95;
// });
// console.log(arrayDesc);

// let arrayBebidas = []
// let prodBebidas = produtos
//   .filter((produtos) => {
//     return produtos.categoria === "Bebidas";
//   })
//   .map((prodBebidas) => arrayBebidas.push(prodBebidas));
//   console.log(arrayBebidas)

// let arrayYpe = []
//   let prodYpe = produtos
//   .filter((produtos) => {
//     return produtos.nome.includes("Ypê");
//   })
//   .map((prodYpe) => arrayYpe.push(prodYpe));
//   console.log(arrayYpe)

// let ypeValue = [];
// let produtoYpe = produtos
//   .filter((produtos) => {
//     return produtos.nome.includes("Ypê");
//   })
//   .map((produtoYpe) =>
//     ypeValue.push(`Compre agora ${produtoYpe.nome} por R$ ${produtoYpe.preco}`)
//   );
// console.log(ypeValue);
