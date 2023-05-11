const endpointsInfo = require("./endpointsInfo");
const {
  displayCategories,
  displayRecipesByCategory,
  displayRandomRecipe,
  insertRecipe,
} = require("./model");
const { requestRecipeByRecipeName } = require("./apiRequests");

const getApiInfo = async (request, response, next) => {
  try {
    response.status(200).send(endpointsInfo);
  } catch (err) {
    next(err);
  }
};

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

const getRecipeByRecipeName = async (request, response, next) => {
  try {
    const { recipeName } = request.params;
    const recipeResponse = await requestRecipeByRecipeName(recipeName);
    response.status(200).send(recipeResponse);
  } catch (err) {
    next(err);
  }
};

const postRecipe = async (request, response, next) => {
  try {
    const { title, category, instructions, image, youtube, ingredients } =
      request.body;

    const recipeToInsert = await insertRecipe(
      title,
      category,
      instructions,
      image,
      youtube,
      ingredients
    );

    response.status(201).send(recipeToInsert);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCategories,
  getRecipesByCategory,
  getRecipesByCategory,
  getRandomRecipe,
  postRecipe,
  getApiInfo,
  getRecipeByRecipeName,
};
