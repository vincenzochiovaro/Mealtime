require("../envRateLimiter");

const recipeRouter = require("express").Router();
const {
  getRandomRecipe,
  postRecipe,
  getRecipeByRecipeName,
  patchVoteCount,
} = require("../controller");

const limiter = require("../rateLimit");
recipeRouter.get("/random", getRandomRecipe);
recipeRouter.get("/:recipeName", getRecipeByRecipeName);
recipeRouter.patch("/:recipeName/:category", patchVoteCount);
recipeRouter.post("/", limiter, postRecipe);

module.exports = recipeRouter;
