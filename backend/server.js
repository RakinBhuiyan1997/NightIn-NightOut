"use strict";

// import the needed node_modules.
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const {
  addUser,
  getDrinkCategories,
  getCategoryDrinks,
  getDrinkRecepie,
  getUser,
  getGames,
  addFavoriteDrink,
  addFavoriteGame,
  addCreatedGame,
  addCreatedDrink,
  getUsers,
} = require("./handlers");

express()
  .use(cors({ origin: "*" }))
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())
  .use(bodyParser.json())
  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇
  .post("/api/signUp/adduser", addUser)
  .post("/api/signin/getUser", getUser)
  .post("/api/user/favorites/addDrink", addFavoriteDrink)
  .post("/api/user/favorites/addGame", addFavoriteGame)
  .post("/api/games/addCreatedGame", addCreatedGame)
  .post("/api/drinks/addCreatedDrink", addCreatedDrink)
  .get("/api/drinks/categories", getDrinkCategories)
  .get("/api/drinks/categories/:id", getCategoryDrinks)
  .get("/api/drinks/drink/:id", getDrinkRecepie)
  .get("/api/games", getGames)
  .get("/api/users", getUsers)
  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
