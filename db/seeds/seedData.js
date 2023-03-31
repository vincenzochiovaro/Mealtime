const db = require("../connection");

const createChickenMealsTable = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS chickenMeals`);

    await db.query(`
            CREATE TABLE chickenMeals (
              id SERIAL PRIMARY KEY,
              title VARCHAR(255) NOT NULL,
              category VARCHAR(255) NOT NULL,
              instructions TEXT NOT NULL,
              image VARCHAR(255) NOT NULL,
              youtube VARCHAR(255),
              ingredients JSONB NOT NULL
            )
          `);
    console.log("chickenMeals table created successfully.");
  } catch (err) {
    console.log("Error creating chickenMeals table");
  }
};

const createPorkMealsTable = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS porkMeals`);

    await db.query(`
              CREATE TABLE porkMeals (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                category VARCHAR(255) NOT NULL,
                instructions TEXT NOT NULL,
                image VARCHAR(255) NOT NULL,
                youtube VARCHAR(255),
                ingredients JSONB NOT NULL
              )
            `);
    console.log("porkMeals table created successfully.");
  } catch (err) {
    console.log("Error creating chickenMeals table");
  }
};

const createBeefMealsTable = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS beefMeals`);

    await db.query(`
                CREATE TABLE beefMeals (
                  id SERIAL PRIMARY KEY,
                  title VARCHAR(255) NOT NULL,
                  category VARCHAR(255) NOT NULL,
                  instructions TEXT NOT NULL,
                  image VARCHAR(255) NOT NULL,
                  youtube VARCHAR(255),
                  ingredients JSONB NOT NULL
                )
              `);
    console.log("beefMeals table created successfully.");
  } catch (err) {
    console.log("Error creating chickenMeals table");
  }
};

const seed = async () => {
  try {
    await createChickenMealsTable();
    await createPorkMealsTable();
    await createBeefMealsTable();
    //   await createLambMealsTable();
  } catch (err) {
    console.log("Error seeding database:", err);
  }
};

seed();
