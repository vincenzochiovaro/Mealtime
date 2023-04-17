require("../envRateLimiter");

const recipeRouter = require("express").Router();
const { getRandomRecipe, postRecipe } = require("../controller");

const limiter = require("../rateLimit");
recipeRouter.get("/random", getRandomRecipe);
recipeRouter.post("/", limiter, postRecipe);

module.exports = recipeRouter;
