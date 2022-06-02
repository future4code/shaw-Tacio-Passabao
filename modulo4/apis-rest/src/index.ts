import express, {Express} from 'express';
import cors from 'cors'
import { users, Type, User } from './data';


const app = express()
app.use(express.json())
app.use(cors())

//Exercício 1.
 app.get("/users", (req, res) => {
    let errorCode = 400

    try {
       res.status(200).send(users)


    } catch (error: any) {

      res.status(errorCode).send({message:error.message});

    }
 });

//a) Método GET.
//b) "/users"

//Exercício 2.
app.get("/users", (req, res) => {
  let errorCode = 400

  try {
     const type: Type = req.query.type as Type
     const user: User[] | undefined = users.filter((user) => user.type.toLowerCase() === type.toLowerCase());
     if (user === undefined) {
        errorCode = 404;
        throw new Error ("Não foi encontrado um usuário.");
     }
     res.status(200).send(user);

  } catch (error: any) {
     res.status(errorCode).send({message: error.message})

  }
});

//Exercício 3.
app.get("/users/:name", (req, res) => {
  let errorCode = 400

  try {
     const name: string = req.params.name as string
     const user: User[] | undefined = users.filter((user) => user.name.toLowerCase() === name.toLowerCase());
     if (user === undefined) {
        errorCode = 404;
        throw new Error ("Não foi encontrado um usuário.");
     }
     res.status(200).send(user);

  } catch (error: any) {
     res.status(errorCode).send({message: error.message})

  }
});

//Exercício 4.
app.post("/users", (req, res) => {
  let errorCode = 400

  try {
     const newUser: User = {
        id: 9,
        name: "Joana",
        email: 'joana@joana.com',
        type: Type.NORMAL,
        age: 30
     }

     users.push(newUser)
     res.status(200).send("Usuário criado com sucesso");

  } catch (error: any) {
     res.status(errorCode).send({message: error.message})
  }
})