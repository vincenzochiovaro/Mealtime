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
      status: 404,
      code: err.code,
      msg: "Error occurred while fetching recipeMeals",
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

const insertRecipe = async (
  title,
  category,
  instructions,
  image,
  youtube,
  ingredients
) => {
  try {
    const ingredientsJson = JSON.stringify(ingredients);

    const query = `INSERT INTO ${category}Meals (title,category,instructions,image,youtube,ingredients) 
       VALUES ($1, $2, $3, $4, $5, $6::json)
       RETURNING *`;

    const values = [
      title,
      category,
      instructions,
      image,
      youtube,
      ingredientsJson,
    ];

    const result = await db.query(query, values);
    return result.rows;
  } catch (err) {
    return Promise.reject({
      code: err.code,
      msg: `Error occurred while inserting a recipe`,
    });
  }
};

module.exports = {
  displayCategories,
  displayRecipesByCategory,
  displayRandomRecipe,
  insertRecipe,
};
