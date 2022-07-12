import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../entities/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const createRecipe = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const token = req.headers.authorization as string;
    if (!token) {
      throw new Error("Invalid token");
    }
    const tokenData = new Authenticator().getTokenData(token);
    if (!tokenData) {
      throw new Error("You need to log in to create a recipe");
    }
    if (!title || !description) {
      throw new Error("Title and description are required");
    }
    const recipe = await new RecipeDatabase().findRecipeByTitle(title);
    if (recipe) {
      throw new Error("Recipe already exists");
    }
    const id = new IdGenerator().generateId();
    const newDate = new Date().toISOString().split("T")[0];

    const newRecipe = new Recipe(id, title, description, newDate);
    await new RecipeDatabase().createRecipe(newRecipe);
    res.status(200).send("Recipe created");
  } catch (error: any) {
    switch (error.message) {
      case "Invalid token":
        res.status(400).send("Invalid token");
        break;
      case "You need to log in to create a recipe":
        res.status(400).send("You need to log in to create a recipe");
        break;
      case "Title and description are required":
        res.status(400).send("Title and description are required");
        break;
      case "Recipe already exists":
        res.status(400).send("Recipe already exists");
        break;
      default:
        res.status(400).send(error.message);
        break;
    }
  }
};
