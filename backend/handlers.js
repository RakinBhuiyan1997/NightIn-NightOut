const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const CreateUser = require("./userAdd");
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../.env" });
const { MONGO_URI } = process.env;
console.log(MONGO_URI);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// const getIngredients = async (req, res) => {
//   const data = await fetch(
//     "www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
//   );
//   const result = data.json();
// };

const addUser = async (req, res) => {
  try {
    mongoose.connect(MONGO_URI, options);
    console.log(req.body);
    const { firstName, lastName, email, password } = req.body;
    const userData = await CreateUser.create({
      firstName,
      lastName,
      email,
      password,
    });
    res.status(200).json({ status: "ok", data: userData });
  } catch (err) {
    console.log(err);
  }
};

const getDrinkCategories = async (req, res) => {
  try {
    const result = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    );
    const data = await result.json();
    res.status(200).json({ status: 200, message: "data received", data: data });
  } catch (err) {
    res
      .status(400)
      .json({ status: 400, message: "Something went wrong please try again" });
    console.log(err);
  }
};

const getCategoryDrinks = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${id}`
    );
    const data = await result.json();
    res.status(200).json({ status: 200, message: "data received", data: data });
  } catch (err) {
    console.log(err);
  }
};

const getDrinkRecepie = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await result.json();
    res.status(200).json({ status: 200, message: "data received", data: data });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addUser,
  getDrinkCategories,
  getCategoryDrinks,
  getDrinkRecepie,
};
