const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const CreateUser = require("./userAdd");
const { MongoClient, Db, ObjectId } = require("mongodb");
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

const getUser = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);
  const { email, password } = req.body;
  try {
    await client.connect();
    console.log("connected");
    const db = client.db("Project");
    const result = await db.collection("users").findOne({
      email,
      password,
    });

    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (err) {
    console.log(err);
  }
  console.log("disconnected");
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
const getGames = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("Project");
  const result = await db.collection("Games").find().toArray();

  if (result.length > 0) {
    res.status(200).json({
      status: 200,
      data: result,
      message: "Successfully retrieved all games",
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "Could not retrieve games",
    });
  }
};

const addFavoriteDrink = async (req, res) => {
  const { ingredients, currentUser } = req.body;

  const client = await new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("connected");
    const db = client.db("Project");
    const result = await db
      .collection("users")
      .updateOne(
        { _id: ObjectId(currentUser._id) },
        { $push: { favoriteDrinks: ingredients } }
      );
    const getUpdatedUser = await await db
      .collection("users")
      .findOne({ _id: ObjectId(currentUser._id) });
    console.log(result);
    res
      .status(200)
      .json({ status: 200, data: getUpdatedUser, message: "Success" });
  } catch (err) {
    console.log(err);
  }
  console.log("disconnected");
};

const addFavoriteGame = async (req, res) => {
  const { game, currentUser } = req.body;

  const client = await new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("connected");
    const db = client.db("Project");
    const result = await db
      .collection("users")
      .updateOne(
        { _id: ObjectId(currentUser._id) },
        { $push: { favoriteGames: game } }
      );
    console.log(result);
    const getUpdatedUser = await await db
      .collection("users")
      .findOne({ _id: ObjectId(currentUser._id) });
    res
      .status(200)
      .json({ status: 200, data: getUpdatedUser, message: "Success" });
  } catch (err) {
    console.log(err);
  }
  console.log("disconnected");
};

const addCreatedGame = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("connected");
    const db = client.db("Project");
    const result = await db.collection("Games").insertOne(req.body);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (err) {
    console.log(err);
  }
  console.log("disconnected");
};

const addCreatedDrink = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);
  console.log(req.body);
  try {
    await client.connect();
    console.log("connected");
    const db = client.db("Project");
    const result = await db.collection("CreatedDrinks").insertOne(req.body);
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (err) {
    console.log(err);
  }
  console.log("disconnected");
};

const getUsers = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("connected");
    const db = client.db("Project");
    const result = await db.collection("users").find().toArray();
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (err) {
    console.log(err);
  }
  console.log("disconnected");
};

const findUser = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);
  const { id } = req.params;
  try {
    await client.connect();
    console.log("connected");
    const db = client.db("Project");
    const result = await db.collection("users").findOne({ _id: ObjectId(id) });
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (err) {
    console.log(err);
  }
  console.log("disconnected");
};

const addFriend = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);
  const { friend, currentUser } = req.body;
  try {
    await client.connect();
    console.log("connected");
    const db = client.db("Project");
    const result = await db
      .collection("users")
      .updateOne(
        { _id: ObjectId(currentUser._id) },
        { $push: { friends: friend } }
      );
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (err) {
    console.log(err);
  }
  console.log("disconnected");
};

const deleteFriend = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);
  const { friend, currentUser } = req.body;
  try {
    await client.connect();
    console.log("connected");
    const db = client.db("Project");
    const result = await db
      .collection("users")
      .updateOne(
        { _id: ObjectId(currentUser._id) },
        { $pull: { friends: friend } }
      );
    console.log(result);
    res.status(200).json({ status: 200, data: result, message: "Success" });
  } catch (err) {
    console.log(err);
  }
  console.log("disconnected");
};

const deleteGame = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);
  const { game, currentUser } = req.body;
  console.log(req.body);
  try {
    await client.connect();
    console.log("connected");
    const db = client.db("Project");
    const result = await db
      .collection("users")
      .updateOne(
        { _id: ObjectId(currentUser._id) },
        { $pull: { favoriteGames: game } }
      );
    console.log(result);
    const getUpdatedUser = await await db
      .collection("users")
      .findOne({ _id: ObjectId(currentUser._id) });
    res
      .status(200)
      .json({ status: 200, data: getUpdatedUser, message: "Success" });
  } catch (err) {
    console.log(err);
  }
  console.log("disconnected");
};

const deleteDrink = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);
  const { ingredients, currentUser } = req.body;
  console.log(req.body);
  try {
    await client.connect();
    console.log("connected");
    const db = client.db("Project");
    const result = await db
      .collection("users")
      .updateOne(
        { _id: ObjectId(currentUser._id) },
        { $pull: { favoriteDrinks: ingredients } }
      );

    const getUpdatedUser = await await db
      .collection("users")
      .findOne({ _id: ObjectId(currentUser._id) });
    res
      .status(200)
      .json({ status: 200, data: getUpdatedUser, message: "Success" });
  } catch (err) {
    console.log(err);
  }
  console.log("disconnected");
};

module.exports = {
  addUser,
  getUser,
  getUsers,
  getDrinkCategories,
  getCategoryDrinks,
  getDrinkRecepie,
  getGames,
  addFavoriteDrink,
  addFavoriteGame,
  addCreatedGame,
  addCreatedDrink,
  findUser,
  addFriend,
  deleteFriend,
  deleteGame,
  deleteDrink,
};
