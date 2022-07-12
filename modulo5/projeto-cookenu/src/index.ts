import { app } from "./app";
import { createRecipe } from "./endpoints/createRecipe";
import { getOtherProfile } from "./endpoints/getOtherProfile";
import { getOwnProfile } from "./endpoints/getOwnProfile";
import { getRecipe } from "./endpoints/getRecipe";
import { login } from "./endpoints/login";
import { signUp } from "./endpoints/signUp";

app.post("/signup", signUp);
app.post("/login", login);
app.get("/user/profile", getOwnProfile);
app.get("/user/profile/:id", getOtherProfile);
app.get("/recipe/:id", getRecipe);
app.post("/recipe", createRecipe);
