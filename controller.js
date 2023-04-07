const { displayCategories, displayPorkRecipes } = require("./model");

const getCategories = async (request, response, next) => {
  try {
    const categoriesObj = await displayCategories();
    response.status(200).send(categoriesObj.rows);
  } catch (err) {
    next(err);
  }
};

const getPorkRecipes = async (request, response, next) => {
  try {
    const porkRecipesObj = await displayPorkRecipes();
    response.status(200).send(porkRecipesObj.rows);
  } catch (err) {
    next(err);
  }
};

module.exports = { getCategories, getPorkRecipes };
