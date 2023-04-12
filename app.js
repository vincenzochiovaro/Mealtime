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

// PSQL ERROR HANDLER
app.use((err, request, response, next) => {
  console.log("psql error");
  if (err.code === "22P02" || err.code === "42P01") {
    response.status(400).send(err.msg);
  } else {
    next(err);
  }
});

// INTERNAL SERVER ERROR
app.use((err, request, response, next) => {
  console.log("internal server error");
  response.status(500).send(err.msg);
});
module.exports = app;
