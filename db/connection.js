const { Client } = require("pg");

const client = new Client({
  database: "mealdatabase",
});

require("dotenv").config({
  path: `${__dirname}/../.env-mealconnection`,
});

client
  .connect()
  .then(() => {
    console.log(`connected to ${process.env.PGDATABASE}!`);
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        hash VARCHAR(200) NOT NULL,
        salt VARCHAR(200) NOT NULL
      );
    `;
    return client.query(query);
  })
  .then(() => {
    console.log("users table created successfully!");
  })
  .catch((err) => {
    console.log("connection error:", err);
  });

module.exports = client;
