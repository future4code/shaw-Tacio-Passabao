import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

//getOtherProfile async promise void
export const getOtherProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const token = req.headers.authorization as string;
        if (!token) {
        throw new Error("Invalid token");
        }
        const tokenData = new Authenticator().getTokenData(token);
        if (!tokenData) {
        throw new Error("You need to log in to get your profile");
        }
        const user = await new UserDatabase().getUserById(id);
        if (!user) {
        throw new Error("User not found");
        }
        res.status(200).send({
        user,
        });
    } catch (error: any) {
        switch (error.message) {
        case "Invalid token":
            res.status(400).send("Invalid token");
            break;
        case "You need to log in to get your profile":
            res.status(400).send("You need to log in to get your profile");
            break;
        case "User not found":
            res.status(400).send("User not found");
            break;
        default:
            res.status(400).send(error.message);
            break;
        }
    }
    }