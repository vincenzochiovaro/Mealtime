const { genPassword } = require("../utilsFunctions/passwordValidation");
const db = require("../db/connection");
const passport = require("passport");
const jwtRouter = require("express").Router();

jwtRouter.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({ message: info.message });
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      return res
        .status(200)
        .json({ message: `${user.username} Logged in successfully` });
    });
  })(req, res, next);
});

jwtRouter.post("/register", async (req, res, next) => {
  const saltHash = genPassword(req.body.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const username = req.body.username;

  try {
    const result = await db.query(
      "INSERT INTO users (username, hash, salt) VALUES ($1, $2, $3) RETURNING *",
      [username, hash, salt]
    );

    const user = result.rows[0];
    res.status(201).json({ message: "User created", user });
  } catch (err) {
    console.error(err, "err");
    res.status(500).json({ message: "Error registering user" });
  }
});

module.exports = jwtRouter;
