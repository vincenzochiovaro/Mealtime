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
        expect(category).toHaveProperty("name", expect.any(String));
      });
    });
  });
});
