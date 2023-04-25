const { genPassword } = require("../utilsFunctions/passwordValidation");
const db = require("../db/connection");
const testjwtRouter = require("express").Router();

testjwtRouter.post("/login", (req, res) => {});

testjwtRouter.post("/register", async (req, res, next) => {
  const saltHash = genPassword(req.body.pw);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const username = req.body.uname;

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

module.exports = testjwtRouter;
