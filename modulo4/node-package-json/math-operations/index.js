let math = process.argv[2];
let number1 = Number(process.argv[3]);
let number2 = Number(process.argv[4]);
let add = number1 + number2;
let sub = number1 - number2;
let mult = number1 * number2;
let div = number1 / number2;

switch (math){
    case "add":
        console.log(`${number1} + ${number2} = ${add}`);
        break;
    case "sub":
        console.log(`${number1} - ${number2} = ${sub}`);
        break;
    case "mult":
        console.log(`${number1} * ${number2} = ${mult}`);
        break;
    case "div":
        console.log(`${number1} / ${number2} = ${div}`);
        break;
    default:
        console.log("Operação inválida");
}