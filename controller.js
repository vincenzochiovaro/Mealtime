const { displayCategories } = require("./model");

const getCategories = async (request, response, next) => {
  try {
    const categoriesObj = await displayCategories();
    response.status(200).send(categoriesObj.rows);
  } catch (err) {
    next(err);
  }
};

module.exports = { getCategories };
