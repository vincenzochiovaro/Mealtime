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

const displayRecipesByCategory = async (category) => {
  try {
    return await db.query(`SELECT * FROM ${category}Meals;`);
  } catch (err) {
    return Promise.reject({
      code: err.code,
      msg: `Error occurred while fetching ${category}Meals`,
    });
  }
};

module.exports = { displayCategories, displayRecipesByCategory };
