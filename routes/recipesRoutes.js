const recipesRouter = require("express").Router();
const { getRecipesByCategory } = require("../controller");

recipesRouter.get("/:category", getRecipesByCategory);

module.exports = recipesRouter;
