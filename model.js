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

const displayRandomRecipe = async () => {
  try {
    const categoryList = await db.query(
      `SELECT * FROM categories ORDER BY RANDOM() LIMIT 1`
    );
    const randomCategory = categoryList.rows[0].category_name;

    return await db.query(
      `SELECT * FROM ${randomCategory}Meals ORDER BY RANDOM() LIMIT 1`
    );
  } catch (err) {
    return Promise.reject({
      code: err.code,
      msg: `Error occurred while fetching randomRecipe`,
    });
  }
};

module.exports = {
  displayCategories,
  displayRecipesByCategory,
  displayRandomRecipe,
};
