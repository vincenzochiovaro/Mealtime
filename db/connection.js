const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client
  .connect()
  .then(() => {
    console.log(`connected to database!`);
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

// handle signals to close the database connection
process.on("SIGINT", () => {
  console.log("closing database connection...");
  client.end(() => {
    console.log("database connection closed");
    process.exit();
  });
});

process.on("SIGTERM", () => {
  console.log("closing database connection...");
  client.end(() => {
    console.log("database connection closed");
    process.exit();
  });
});

module.exports = client;
