const {
  requestChickenMeals,
  requestPorkMeals,
  requestBeefMeals,
  requestLambMeals,
} = require("../apiRequests");

describe("requestChickenMeals", () => {
  test("should return an array of chicken meal objects", async () => {
    const chickenMeals = await requestChickenMeals();
    expect(Array.isArray(chickenMeals)).toBe(true);
    expect(chickenMeals[0]).toHaveProperty("id");
    expect(chickenMeals[0]).toHaveProperty("title");
    expect(chickenMeals[0]).toHaveProperty("category");
    expect(chickenMeals[0]).toHaveProperty("instructions");
    expect(chickenMeals[0]).toHaveProperty("image");
    expect(chickenMeals[0]).toHaveProperty("youtube");
    expect(chickenMeals[0]).toHaveProperty("ingredients");
    expect(chickenMeals[0]).toHaveProperty("voteCount");
  });
  test("should return chicken meals with category 'Chicken'", async () => {
    const chickenMeals = await requestChickenMeals();
    chickenMeals.forEach((meal) => {
      expect(meal.category).toBe("Chicken");
    });
  });
});

describe("requestPorkMeals", () => {
  test("should return an array of pork meal objects", async () => {
    const porkMeals = await requestPorkMeals();
    expect(Array.isArray(porkMeals)).toBe(true);
    expect(porkMeals[0]).toHaveProperty("id");
    expect(porkMeals[0]).toHaveProperty("title");
    expect(porkMeals[0]).toHaveProperty("category");
    expect(porkMeals[0]).toHaveProperty("instructions");
    expect(porkMeals[0]).toHaveProperty("image");
    expect(porkMeals[0]).toHaveProperty("youtube");
    expect(porkMeals[0]).toHaveProperty("ingredients");
    expect(porkMeals[0]).toHaveProperty("voteCount");
  });
  test("should return Pork meals with category 'Pork'", async () => {
    const PorkMeals = await requestPorkMeals();
    PorkMeals.forEach((meal) => {
      expect(meal.category).toBe("Pork");
    });
  });
});

describe("requestBeefMeals", () => {
  test("should return an array of beef meal objects", async () => {
    const beefMeals = await requestBeefMeals();
    expect(Array.isArray(beefMeals)).toBe(true);
    expect(beefMeals[0]).toHaveProperty("id");
    expect(beefMeals[0]).toHaveProperty("title");
    expect(beefMeals[0]).toHaveProperty("category");
    expect(beefMeals[0]).toHaveProperty("instructions");
    expect(beefMeals[0]).toHaveProperty("image");
    expect(beefMeals[0]).toHaveProperty("youtube");
    expect(beefMeals[0]).toHaveProperty("ingredients");
    expect(beefMeals[0]).toHaveProperty("voteCount");
  });
  test("should return Beef meals with category 'Beef'", async () => {
    const BeefMeals = await requestBeefMeals();
    BeefMeals.forEach((meal) => {
      expect(meal.category).toBe("Beef");
    });
  });
});

describe("requestLambMeals", () => {
  test("should return an array of lamb meal objects", async () => {
    const lambMeals = await requestLambMeals();
    expect(Array.isArray(lambMeals)).toBe(true);
    expect(lambMeals[0]).toHaveProperty("id");
    expect(lambMeals[0]).toHaveProperty("title");
    expect(lambMeals[0]).toHaveProperty("category");
    expect(lambMeals[0]).toHaveProperty("instructions");
    expect(lambMeals[0]).toHaveProperty("image");
    expect(lambMeals[0]).toHaveProperty("youtube");
    expect(lambMeals[0]).toHaveProperty("ingredients");
  });
  // test("should return Lamb meals with category 'Lamb'===> reported small issue to the MealDB creator for wrong category name on the lamb meals category, ", async () => {
  //   const LambMeals = await requestLambMeals();
  //   LambMeals.forEach((meal) => {
  //     console.log(meal.category);
  //     expect(meal.category).toBe("Lamb");
  //   });
  // });
});
