const express = require("express");
const db = require("./db/connection");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const { getApiInfo } = require("./controller");
const {
  handleCustomErrors,
  handlePSQLErrors,
  handleInternalErrors,
} = require("./errorHandlers");
const app = express();

const sessionStore = new pgSession({
  postgresConnection: db,
  collection: "sessions",
});

app.use(
  session({
    secret: "some secret",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(express.json());

//ROUTES
const categoriesRouter = require("./routes/categoriesRoutes");
const recipesRouter = require("./routes/recipesRoutes");
const recipeRouter = require("./routes/recipeRoutes");
const testjwtRouter = require("./routes/testjwtRoutes");

app.get("/api", getApiInfo);
app.use("/api/categories", categoriesRouter);
app.use("/api/recipes", recipesRouter);
app.use("/api/recipe", recipeRouter);
app.use("/", testjwtRouter);

// CUSTOM ERROR HANDLERS
app.use(handleCustomErrors);
app.use(handlePSQLErrors);
app.use(handleInternalErrors);

module.exports = app;
