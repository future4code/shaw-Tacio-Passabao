// A. A string não pode ter seu tipo alterado uma vez que foi definida como string.
// let minhaString: string = "Hello World";
// minhaString = 10

// B.
// let meuNumero: number | string = 10;

//C.
type Person = {
  name: string;
  age: number;
  favColor: string;
};

// let person1: Person = {
//   name: "João",
//   age: 20,
//   favColor: "blue",
// };

// let person2: Person = {
//   name: "Maria",
//   age: 30,
//   favColor: "red",
// };

// let person3: Person = {
//   name: "Pedro",
//   age: 40,
//   favColor: "green",
// };

// let person4: Person = {
//   name: "Ana",
//   age: 50,
//   favColor: "yellow",
// };


//D .

enum rainbow {
    RED = "red",
    YELLOW = "yellow",
    GREEN = "green",
    BLUE = "blue",
    INDIGO = "indigo",
    VIOLET = "violet",
    ORANGE = "orange",
}

let person1: Person = {
    name: "João",
    age: 20,
    favColor: rainbow.BLUE,
  };
  
  let person2: Person = {
    name: "Maria",
    age: 30,
    favColor: rainbow.RED,
  };
  
  let person3: Person = {
    name: "Pedro",
    age: 40,
    favColor: rainbow.GREEN,
  };
  
  let person4: Person = {
    name: "Ana",
    age: 50,
    favColor: rainbow.VIOLET,
  };

  console.table([person1, person2, person3, person4]);
  