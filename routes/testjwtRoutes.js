const testjwtRouter = require("express").Router();

testjwtRouter.get("/test-session", (req, res) => {
  res.send(req.session);
  res.send("Session value set");
});

module.exports = testjwtRouter;
