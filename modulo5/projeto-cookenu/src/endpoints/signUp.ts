import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

//export let signup as async promise void
export let signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      throw new Error("Invalid data");
    }
    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);
    if (user) {
      throw new Error("User already exists");
    }
    const idGenerator = new IdGenerator();
    const id: string = idGenerator.generateId();
    const hashManager = new HashManager();
    const hashPassword = hashManager.createHash(password);
    const newUser = new User(id, name, email, hashPassword, role);
    await userDatabase.createUser(newUser);
    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id,
      role,
    });
    res.status(200).send({
      message: "User created successfully",
      token,
    });
  } catch (error: any) {
    switch (error.message) {
      case "Invalid data":
        res.status(400).send("Invalid data");
        break;
      case "User already exists":
        res.status(400).send("User already exists");
        break;
      default:
        res.status(400).send(error.message);
        break;
    }
  }
};
