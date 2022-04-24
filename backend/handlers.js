const { v4: uuidv4 } = require("uuid");

const getIngredients = async (req, res) => {
  const data = await fetch(
    "www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
  );
  const result = data.json();
};
