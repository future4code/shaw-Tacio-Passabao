import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User, USER_ROLES } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

//export let login as async promise void
export let login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Invalid data");
    }
    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    const hashManager: HashManager = new HashManager();
    const isPasswordCorrect = hashManager.compareHash(
      password,
      user.getPassword()
    );
    if (!isPasswordCorrect) {
      throw new Error("Invalid password or email");
    }
    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.getId(),
      role: user.getRole() as USER_ROLES,
    });
    res.status(200).send({ message: "Login successful", token });
  } catch (error: any) {
    switch (error.message) {
      case "Invalid data":
        res.status(400).send("Invalid data");
        break;
      case "User not found":
        res.status(400).send("User not found");
        break;
      case "Invalid password or email":
        res.status(400).send("Invalid password or email");
        break;
      default:
        res.status(400).send(error.message);
        break;
    }
  }
};
