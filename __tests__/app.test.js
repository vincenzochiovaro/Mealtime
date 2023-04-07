const db = require("../db/connection");
const seed = require("../db/seeds/seedData");
const request = require("supertest");
const app = require("../app");

beforeEach(() => {
  return seed();
});

afterAll(() => {
  db.end();
});

describe("app", () => {
  describe("Get/api/categories", () => {
    test("should respond with a status of 200 ", async () => {
      await request(app).get("/api/categories").expect(200);
    });
    test("should respond with a status of 200 and display an array of category objects  ", async () => {
      const categories = await request(app).get("/api/categories").expect(200);
      expect(Array.isArray(categories.body));
      expect(categories.body).toHaveLength(4);
    });
    test("each object should contain id and name property", async () => {
      const categories = await request(app).get("/api/categories").expect(200);
      categories.body.forEach((category) => {
        expect(category).toHaveProperty("id", expect.any(Number));
        expect(category).toHaveProperty("category_name", expect.any(String));
      });
    });
  });

  describe("Get/api/recipes/pork", () => {
    test("should respond with a status of 200", async () => {
      await request(app).get("/api/recipes/pork").expect(200);
    });
    test("should respond with a status of 200 and display an array of porkRecipes object  ", async () => {
      const porkRecipes = await request(app)
        .get("/api/recipes/pork")
        .expect(200);
      expect(Array.isArray(porkRecipes.body));
    });
    test("each object should contain id/title/category/instrunctions/image/youtube and ingredients property  ", async () => {
      const porkRecipes = await request(app)
        .get("/api/recipes/pork")
        .expect(200);
      porkRecipes.body.forEach((recipe) => {
        expect(recipe).toHaveProperty("id", expect.any(Number));
        expect(recipe).toHaveProperty("title", expect.any(String));
        expect(recipe).toHaveProperty("category", expect.any(String));
        expect(recipe).toHaveProperty("instructions", expect.any(String));
        expect(Array.isArray(recipe.ingredients)).toBe(true);
      });
    });
  });
});
