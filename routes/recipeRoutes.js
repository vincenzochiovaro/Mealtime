require("../envRateLimiter");

const recipeRouter = require("express").Router();
const {
  getRandomRecipe,
  postRecipe,
  getRecipeByRecipeName,
} = require("../controller");

const limiter = require("../rateLimit");
recipeRouter.get("/random", getRandomRecipe);
recipeRouter.get("/:recipeName", getRecipeByRecipeName);
recipeRouter.post("/", limiter, postRecipe);

module.exports = recipeRouter;
