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
    let isCategory = true;
    const categoryList = await db.query(`SELECT * FROM categories;`);
    categoryList.rows.forEach((eachCategoryInDatabase) => {
      if (eachCategoryInDatabase.category_name.includes(category) === false) {
        isCategory = false;
      }
    });
    if (!isCategory) {
      return Promise.reject({
        status: 404,
        code: err.code,
        msg: "Category not found",
      });
    }
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

const updateVoteCount = async (recipeName, category) => {
  try {
    updatedRecipeCount = await db.query(
      `UPDATE ${category}Meals SET voteCount = voteCount + 1 WHERE title = '${recipeName}' RETURNING *`
    );
    if (!updatedRecipeCount.rows) {
      return Promise.reject({
        status: 404,
        code: err.code,
        msg: "couldn't find the recipe to update",
      });
    }
    return updatedRecipeCount.rows;
  } catch (error) {
    return Promise.reject({
      code: error.code,
      msg: `Error occurred while update a recipe voteCount`,
    });
  }
};

module.exports = {
  displayCategories,
  displayRecipesByCategory,
  displayRandomRecipe,
  insertRecipe,
  updateVoteCount,
};
