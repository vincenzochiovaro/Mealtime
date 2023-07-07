const endpointsInfo = {
  categories: {
    method: "GET",
    description: "Retrieves all category names and their corresponding IDs",
    url: "/api/categories",
  },
  recipesByCategoryName: {
    method: "GET",
    description: "Retrieves all recipes filtered by a specific category name",
    url: "/api/recipes/:category",
  },
  randomRecipe: {
    method: "GET",
    description: "Retrieves a random recipe from a randomly selected category",
    url: "/api/recipe/random",
  },
  recipeByName: {
    method: "GET",
    description: "Retrieve a recipe by recipe name",
    url: "/api/recipe/:recipeName",
  },

  insertRecipe: {
    method: "POST",
    description:
      "Inserts a new recipe into the database. Please note that a maximum of 3 posts per day is allowed. Make sure to include a title, a valid category, instructions, image URL, YouTube link (if available), and ingredients with measurements.",
    url: "/api/recipe",
  },

  register: {
    method: "POST",
    description:
      "Register a new user account, must have username and password property",
    url: "/auth/register",
  },
  login: {
    method: "POST",
    description: "Logs in an existing user ",
    url: "/auth/login",
  },
  updateVoteCountRecipe: {
    method: "PATCH",
    description: "Update voteCount to a specific recipe ",
    url: "/api/recipe/:recipeName/:category",
  },
};
module.exports = endpointsInfo;
