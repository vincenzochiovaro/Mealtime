const {
  displayCategories,
  displayRecipesByCategory,
  displayRandomRecipe,
} = require("./model");

const getCategories = async (request, response, next) => {
  try {
    const categoriesObj = await displayCategories();
    response.status(200).send(categoriesObj.rows);
  } catch (err) {
    next(err);
  }
};

const getRecipesByCategory = async (request, response, next) => {
  try {
    const { category } = request.params;
    const recipesObj = await displayRecipesByCategory(category);
    response.status(200).send(recipesObj.rows);
  } catch (err) {
    next(err);
  }
};

const getRandomRecipe = async (request, response, next) => {
  try {
    const randomRecipeObj = await displayRandomRecipe();
    response.status(200).send(randomRecipeObj.rows);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCategories,
  getRecipesByCategory,
  getRecipesByCategory,
  getRandomRecipe,
};
