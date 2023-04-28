const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { validPassword } = require("./utilsFunctions/passwordValidation");
const db = require("./db/connection");

const customFields = {
  usernameField: "uname",
  passwordField: "pw",
};

const verifyCallback = async (username, password, done) => {
  try {
    const result = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    if (!result.rows.length) {
      return done(null, false, { message: "Incorrect username." });
    }
    const user = result.rows[0];
    console.log(user);
    const isValidPassword = await validPassword(password, user.hash, user.salt);

    console.log(isValidPassword);
    if (!isValidPassword) {
      return done(null, false, { message: "Incorrect password." });
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = result.rows[0];
    done(null, user);
  } catch (err) {
    return done(err);
  }
});
