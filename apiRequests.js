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
        voteCount: 0,
      };
      return porkRecipeObj;
    });
    return porkMealDetails;
  } catch (err) {
    console.log(err, "ERROR");
  }
};

const requestBeefMeals = async () => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=Beef"
    );

    const beefMealDetails = response.data.meals.map((meal) => {
      const ingredientsList = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measurement = meal[`strMeasure${i}`];
        if (ingredient && measurement) {
          ingredientsList.push({ ingredient, measurement });
        }
      }

      const beefRecipeObj = {
        id: meal.idMeal,
        title: meal.strMeal,
        category: meal.strCategory,
        instructions: meal.strInstructions,
        image: meal.strMealThumb,
        youtube: meal.strYoutube,
        ingredients: ingredientsList,
        voteCount: 0,
      };
      return beefRecipeObj;
    });
    return beefMealDetails;
  } catch (err) {
    console.log(err, "ERROR");
  }
};

const requestLambMeals = async () => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=Lamb"
    );

    const lambMealDetails = response.data.meals.map((meal) => {
      const ingredientsList = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measurement = meal[`strMeasure${i}`];
        if (ingredient && measurement) {
          ingredientsList.push({ ingredient, measurement });
        }
      }

      const lambRecipeObj = {
        id: meal.idMeal,
        title: meal.strMeal,
        category: meal.strCategory,
        instructions: meal.strInstructions,
        image: meal.strMealThumb,
        youtube: meal.strYoutube,
        ingredients: ingredientsList,
      };
      return lambRecipeObj;
    });
    return lambMealDetails;
  } catch (err) {
    console.log(err, "ERROR");
  }
};

const requestRecipeByRecipeName = async (recipeName) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`
    );

    if (!response.data.meals) {
      return Promise.reject({
        code: 404,
        msg: `recipeName does not exists`,
      });
    }
    return response.data.meals;
  } catch (err) {
    console.log(err, "error in requestRecipeByRecipeName");
  }
};

module.exports = {
  requestChickenMeals,
  requestPorkMeals,
  requestBeefMeals,
  requestLambMeals,
  requestRecipeByRecipeName,
};
