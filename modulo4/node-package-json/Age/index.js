// Exercício 1
// a. Acessamos através do process.argv[index] o valor passado como parâmetro na execução do programa.

// b.  

let nameUser = process.argv[2];
let ageUser = process.argv[3];

console.log(`Olá, ${nameUser}! Você tem ${ageUser} anos.`);	

//c.    

let ageNumber = Number(ageUser);
let addSeven =  ageNumber + 7;

console.log(`Você vai ter ${addSeven} anos em 7 anos.`);