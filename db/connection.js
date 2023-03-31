const { Client } = require("pg");

const client = new Client();

require("dotenv").config({
  path: `${__dirname}/../.env-mealconnection`,
});

client
  .connect()
  .then(() => {
    console.log(`connected to ${process.env.PGDATABASE}!`);
  })
  .catch((err) => {
    console.log("connection error:", err);
  });

module.exports = client;
