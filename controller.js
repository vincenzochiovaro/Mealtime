const { displayCategories, displayRecipesByCategory } = require("./model");

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

module.exports = { getCategories, getRecipesByCategory };
