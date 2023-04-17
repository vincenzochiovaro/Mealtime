const { getApiInfo } = require("./controller");
const express = require("express");
const app = express();

app.use(express.json());

//routes
const categoriesRouter = require("./routes/categoriesRoutes");
const recipesRouter = require("./routes/recipesRoutes");
const recipeRouter = require("./routes/recipeRoutes");

app.get("/api", getApiInfo);
app.use("/api/categories", categoriesRouter);
app.use("/api/recipes", recipesRouter);
app.use("/api/recipe", recipeRouter);

//CUSTOM ERROR HANDLER
app.use((err, request, response, next) => {
  if (err.status) {
    response.status(err.status).send(err.msg);
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
