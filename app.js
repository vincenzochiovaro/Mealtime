const {
  getCategories,
  getRecipesByCategory,
  getRandomRecipe,
} = require("./controller");

const express = require("express");
const app = express();

app.get("/api/categories", getCategories);
app.get("/api/recipes/:category", getRecipesByCategory);
app.get("/api/recipe/random", getRandomRecipe);

//CUSTOM ERROR HANDLER
app.use((err, request, response, next) => {
  if (err.status === 404) {
    response.status(err.status).send({ "Not Found": "Category not found" });
  } else {
    next(err);
  }
});

// PSQL ERROR HANDLER
app.use((err, request, response, next) => {
  if (err.code === "22P02") {
    response.status(400).send(err.msg);
  } else {
    next(err);
  }
});

// INTERNAL SERVER ERROR
app.use((err, request, response, next) => {
  response.status(500).send(err.msg);
});

module.exports = app;
