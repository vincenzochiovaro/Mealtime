const axios = require("axios");

const requestChickenMeals = async () => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken"
    );

    const chickenMealDetails = response.data.meals.map((meal) => {
      const ingredientsList = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measurement = meal[`strMeasure${i}`];
        if (ingredient && measurement) {
          ingredientsList.push({ ingredient, measurement });
        }
      }

      const chickenRecipeObj = {
        id: meal.idMeal,
        title: meal.strMeal,
        category: meal.strCategory,
        instructions: meal.strInstructions,
        image: meal.strMealThumb,
        youtube: meal.strYoutube,
        ingredients: ingredientsList,
      };
      return chickenRecipeObj;
    });
    return chickenMealDetails;
  } catch (err) {
    console.log(err, "ERROR");
  }
};

const requestPorkMeals = async () => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=Pork"
    );

    const porkMealDetails = response.data.meals.map((meal) => {
      const ingredientsList = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measurement = meal[`strMeasure${i}`];
        if (ingredient && measurement) {
          ingredientsList.push({ ingredient, measurement });
        }
      }

      const porkRecipeObj = {
        id: meal.idMeal,
        title: meal.strMeal,
        category: meal.strCategory,
        instructions: meal.strInstructions,
        image: meal.strMealThumb,
        youtube: meal.strYoutube,
        ingredients: ingredientsList,
      };
      return porkRecipeObj;
    });
    return porkMealDetails;
  } catch (err) {
    console.log(err, "ERROR");
  }
};

module.exports = { requestChickenMeals, requestPorkMeals };
