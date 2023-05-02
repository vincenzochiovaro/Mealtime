const express = require("express");
const db = require("./db/connection");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const passport = require("passport");
const { getApiInfo } = require("./controller");
const app = express();
const cors = require("cors");
require("dotenv").config();

//ERROR HANDLERS
const {
  handleCustomErrors,
  handlePSQLErrors,
  handleInternalErrors,
} = require("./errorHandlers");

//ROUTES
const categoriesRouter = require("./routes/categoriesRoutes");
const recipesRouter = require("./routes/recipesRoutes");
const recipeRouter = require("./routes/recipeRoutes");
const jwtRouter = require("./routes/jwtRoutes");
const seed = require("./db/seeds/seedData");

const sessionStore = new pgSession({
  postgresConnection: db,
  collection: "sessions",
});

app.use(
  session({
    secret: "some secret", // to replace with an environment variable
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(express.json());

//Access to passport.js module
require("./passport");
app.use(passport.initialize());
app.use(passport.session());

//Endpoints
app.get("/api", getApiInfo);
app.use("/api/categories", categoriesRouter);
app.use("/api/recipes", recipesRouter);
app.use("/api/recipe", recipeRouter);
app.use("/auth", jwtRouter);

// CUSTOM ERROR HANDLERS
app.use(handleCustomErrors);
app.use(handlePSQLErrors);
app.use(handleInternalErrors);

//seedDB
seed();

//allow cross origin resource sharing
app.use(cors());
module.exports = app;
