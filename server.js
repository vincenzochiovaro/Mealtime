const app = require("./app");

const port = process.env.PORT || 8080;

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});
