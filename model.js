const db = require("./db/connection");

const displayCategories = async () => {
  try {
    const result = await db.query(`SELECT * FROM categories;`);
    return result;
  } catch (err) {
    return Promise.reject({
      msg: "Error occurred while fetching categories",
    });
  }
};

module.exports = { displayCategories };
