const { getCategories } = require("./controller");

const express = require("express");
const app = express();

app.get("/api/categories", getCategories);

// INTERNAL SERVER ERROR
app.use((err, request, response, next) => {
  response.status(500).send(err.msg);
});
module.exports = app;
