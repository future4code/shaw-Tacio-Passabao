import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";

export let getRecipe = async (req: Request, res: Response): Promise<void> => {
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
    const recipe = await new RecipeDatabase().getRecipeById(id);
    if (!recipe) {
      throw new Error("Recipe not found");
    }
    res.status(200).send({
      recipe,
    });
  } catch (error: any) {
    switch (error.message) {
      case "Invalid token":
        res.status(400).send("Invalid token");
        break;
      case "You need to log in to get your profile":
        res.status(400).send("You need to log in to get your profile");
        break;
      case "Recipe not found":
        res.status(400).send("Recipe not found");
        break;
      default:
        res.status(400).send(error.message);
        break;
    }
  }
};
