const categoriesRouter = require("express").Router();
const { getCategories } = require("../controller");

categoriesRouter.get("/", getCategories);

module.exports = categoriesRouter;
