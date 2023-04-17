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
  insertRecipe: {
    method: "POST",
    description:
      "Inserts a new recipe into the database. Please note that a maximum of 3 posts per day is allowed. Make sure to include a title, a valid category, instructions, image URL, YouTube link (if available), and ingredients with measurements.",
    url: "/api/recipe",
  },
};
module.exports = endpointsInfo;
