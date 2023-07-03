# Mealtime

Mealtime is a concise and user-friendly RESTful API designed for seamless API interaction and website development. It enables you to access a vast collection of hundreds of recipes, empowering you to create engaging applications, provide recipe suggestions, generate random recipes, and explore culinary inspiration effortlessly.

# Hosted Version

- You can find a hosted version of this project at https://mealtime-dkgl.onrender.com/api

# Getting Started

1. Install an HTTP client, such as Insomnia or Postman, if you don't have one installed already.
2. Send a GET request to https://mealtime-dkgl.onrender.com/api to retrieve an overview of the API structure

If you want to run Mealtime API locally, follow these steps:

- Clone the repository
- Install dependencies: npm install
- Create a .env-mealconnection file with the following content: PGDATABASE=mealdatabase
- Create a .env with SECRET=your secret key
- Create a .env-rateLimiter file with the following content:
  RATE_LIMIT_WINDOW_MS=86400000
  RATE_LIMIT_MAX=3
  RATE_LIMIT_MESSAGE=Too many requests, please try again tomorrow
- Run the tests: npm test
- Start the server: npm start or nodemon server.js if you have nodemon installed.
- Open your preferred API client, such as Insomnia, and interact with the available endpoints. Please note that there is a limit of three POST requests per day.

- Example usage: To retrieve a random recipe from the database, send a GET request to http://localhost:8080/api/recipe/random in Insomnia.

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
