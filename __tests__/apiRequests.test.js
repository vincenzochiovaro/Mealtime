const { requestChickenMeals, requestPorkMeals } = require("../apiRequests");

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
  });
});
