const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../.env" });
const { MONGO_URI } = process.env;
console.log(MONGO_URI);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// const getData = async () => {
//   const data = await fetch(
//     "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"
//   );

//   const result = await data.json();
//   console.log(result);
// };

const dbFunction = async () => {
  // creates a new client
  const client = await new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();
  // connect to the database (db name is provided as an argument to the function)
  const db = client.db("Project");
  console.log("connected!");

  await db.collection("Games").insertOne({ _id: "1", game: "Beer Pong" });
  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};

// dbFunction();
dbFunction();
