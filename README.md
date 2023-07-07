# Mealtime

Mealtime is a concise and user-friendly RESTful API designed for seamless API interaction and website development. It enables you to access a vast collection of hundreds of recipes, empowering you to create engaging applications, provide recipe suggestions, generate random recipes, and explore culinary inspiration effortlessly.

# Hosted Version

- You can find a hosted version of this project at https://mealtime-dkgl.onrender.com/api

# Testing

This project utilizes Jest for unit testing the API endpoints. To run the tests locally, follow these steps:

1. Make sure you have all the dependencies installed by running the following command: npm install
2. Execute the following command to run the tests: npm test
3. The tests are located in the **tests** directory.

# Error Handling

Errors are handled using middleware functions defined in the errorHandlers.js file. These middleware functions catch and handle different types of errors that may occur during the API's execution.

- handleCustomErrors: This middleware function handles custom errors with a specified status and message. If the error has a status property, it sends the corresponding status code and message in the response. If the error has a code property of 404, it sends a 404 status code and message. Otherwise, it passes the error to the next error-handling middleware.

- handlePSQLErrors: This middleware function handles errors specific to PostgreSQL, such as constraint violations or invalid queries. It checks the code property of the error and sends an appropriate response based on the code. For example, if the code is "22P02" or "42601", indicating a data type or syntax error, it sends a 400 status code with the corresponding error message. If the code is "23502", indicating missing required properties, it sends a 400 status code with a specific message. Otherwise, it passes the error to the next error-handling middleware.

- handleInternalErrors: This middleware function handles any internal server errors that may occur during the API's execution. It sends a generic 500 status code and the error message in the response.

# Endpoints

The following endpoints are available:

- GET /api

  Overview of the API structure

- GET /api/categories

  Retrieves all category names and their corresponding IDs.

- GET /api/recipes/:category

  Retrieves all recipes filtered by a specific category name.

- GET /api/recipe/random

  Retrieves a random recipe from a randomly selected category.

- GET /api/recipe/:recipeName

  Retrieve a recipe by recipe name

- POST /auth/register

  Register a new user account, must have username and password property.

- POST /auth/login

  Logs in an existing user.

- PATCH /api/recipe/:recipeName/:category

  Update voteCount to a specific recipe.

- POST /api/recipe

  Inserts a new recipe into the database. Please note that a maximum of 3 posts per day is allowed. Make sure to include a title, a valid category, instructions, image URL, YouTube link (if available), and ingredients with measurements.

  - Request Body Example:

    {
    "title": "string",
    "category": "string",
    "instructions": "string",
    "imageURL": "string",
    "youTubeLink": "string" || null,
    "ingredients": [
    {
    "name": "string",
    "measurement": "string"
    }
    ]
    }

# Authentication

This project includes a simple authentication system for front-end purposes. The /auth/register and /auth/login endpoints have been implemented with a JWT local strategy, allowing users to register and login to the application.

# Technologies used

- Node.js
- Express
- PostgreSQL
- Passport.js
- JSON Web Tokens (JWT)
- Axios

# Contributing

If you'd like to contribute to this project, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

# Acknowledgements

I would like to thank the MealDB team for providing a wonderful API and allowing me to use their database in this project.

# Author

Vincenzo Chiovaro - https://www.linkedin.com/in/vincenzo-chiovaro-22258a176/
