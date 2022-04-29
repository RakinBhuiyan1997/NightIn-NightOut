const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: String,
  friends: Array,
  favoriteDrinks: Array,
  favoriteGames: Array,
});
const CreateUser = mongoose.model("Users", userSchema);
module.exports = CreateUser;
