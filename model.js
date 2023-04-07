const db = require("./db/connection");

const displayCategories = async () => {
  try {
    const result = await db.query(`SELECT * FROM categories;`);
    return result;
  } catch (err) {
    return Promise.reject({
      code: err.code,
      msg: "Error occurred while fetching categories",
    });
  }
};

const displayPorkRecipes = async () => {
  try {
    return await db.query(`SELECT * FROM porkMeals;`);
  } catch (err) {
    return Promise.reject({
      code: err.code,
      msg: "Error occurred while fetching porkMeals",
    });
  }
};

module.exports = { displayCategories, displayPorkRecipes };
