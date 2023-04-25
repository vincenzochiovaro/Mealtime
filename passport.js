const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { validPassword } = require("./utilsFunctions/passwordValidation");
const db = require("./db/connection");

const customFields = {
  usernameField: "uname",
  passwordField: "pw",
};

const verifyCallback = (username, password, done) => {
  db.query(
    "SELECT * FROM users WHERE username = $1",
    [username],
    (err, result) => {
      if (err) {
        return done(err);
      }
      if (!result.rows.length) {
        return done(null, false, { message: "Incorrect username." });
      }
      const user = result.rows[0];
      if (!validPassword(password, user.password, user.salt)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    }
  );
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.query("SELECT * FROM users WHERE id = $1", [id], (err, result) => {
    if (err) {
      return done(err);
    }
    const user = result.rows[0];
    done(null, user);
  });
});
