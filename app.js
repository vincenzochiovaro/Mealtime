const {
  getCategories,
  getRecipesByCategory,
  getRandomRecipe,
  postRecipe,
} = require("./controller");
require("./envRateLimiter");

const express = require("express");
const app = express();
const limiter = require("./rateLimit");
app.use(express.json());

app.get("/api/categories", getCategories);
app.get("/api/recipes/:category", getRecipesByCategory);
app.get("/api/recipe/random", getRandomRecipe);
app.post("/api/recipe", limiter, postRecipe);

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
  if (err.code === "22P02" || err.code === "42601") {
    response.status(400).send(err.msg);
  } else if (err.code === "23502") {
    response
      .status(400)
      .send(
        "One or more required property fields are missing or incorrect, make sure to have each property followed from the correct value"
      );
  } else {
    next(err);
  }
});

// INTERNAL SERVER ERROR
app.use((err, request, response, next) => {
  response.status(500).send(err.msg);
});

module.exports = app;
