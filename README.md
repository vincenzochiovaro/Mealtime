# Mealtime

This is a simplified version of the MealDB API, designed to help beginners learn how to interact with APIs and create basic websites using programming languages. The goal of this project is to simplify the MealDB API response to include only the necessary information, making it easier for beginners to navigate and practice with.

# Getting Started

- Clone the repository
- Install dependencies: npm install
- Create a .env-mealconnection file with the following content: PGDATABASE=mealdatabase
- Create a .env with SECRET=your secret key
- Create a .env-rateLimiter file with the following content:
  RATE_LIMIT_WINDOW_MS=86400000
  RATE_LIMIT_MAX=3
  RATE_LIMIT_MESSAGE=Too many requests, please try again tomorrow
- Run the tests: npm test
- To start the server, type npm start in your terminal. Alternatively, you can install nodemon and run nodemon server.js.
- Open your preferred API client, such as Insomnia, and interact with the available endpoints. Please note that there is a limit of three POST requests per day.

- Example usage: To retrieve a random recipe from the database, send a GET request to http://localhost:8080/recipe/random in Insomnia.

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

- POST /auth/register

  Register a new user account, must have username and password property.

- POST /auth/login

  Logs in an existing user.

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
