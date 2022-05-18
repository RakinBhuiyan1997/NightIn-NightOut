import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import FavoriteButton from "./FavoriteButton";
import { NightContext } from "./NightContext";

const DrinkRecepie = () => {
  const { id } = useParams();
  const { currentUser } = useContext(NightContext);
  const [ingredients, setIngredients] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/drinks/drink/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIngredients(data.data.drinks[0]);
        setLoading(false);
      });
  }, []);

  let arr = [];
  let int = [];
  Object.keys(ingredients).forEach((key) => {
    if (ingredients[key] === null) {
      delete ingredients[key];
    }
  });
  Object.keys(ingredients).forEach((key) => {
    if (key.includes("strIngredient")) {
      arr.push(ingredients[key]);
    }
  });

  Object.keys(ingredients).forEach((key) => {
    if (key.includes("strMeasure")) {
      int.push(ingredients[key]);
    }
  });

  const addDrink = async () => {
    const drink = await fetch("/api/user/favorites/addDrink", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredients,
        currentUser: currentUser,
      }),
    });
  };

  const removeDrink = async () => {
    const drink = await fetch("/api/users/favorites/deleteDrink", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredients,
        currentUser: currentUser,
      }),
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const isFavorite = currentUser.favoriteDrinks.some(
      (val) => val._id === ingredients._id
    );
    console.log("this is the drink data", ingredients);
    console.log("this is the favorite boolean data", isFavorite);
    if (isFavorite) {
      removeDrink();
      return;
    }
    addDrink();
  };

  const isFavorited = currentUser?.favoriteDrinks?.some(
    (x) => x._id === ingredients._id
  );

  console.log("This is to check if it is in the array", isFavorited);

  console.log(ingredients);
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <Container>
          <Card>
            <Image src={ingredients.strDrinkThumb} alt="drink image" />
            <Receipe>
              <h2>Ingredients</h2>
              {arr.map((val) => {
                return (
                  <div>
                    <p>{val}</p>
                  </div>
                );
              })}
              <h2>Measurements</h2>
              {int.map((val) => {
                return (
                  <div>
                    <p>{val}</p>
                  </div>
                );
              })}
              <h2>Instructions</h2>
              <p>{ingredients.strInstructions}</p>
            </Receipe>
            <p>
              Favorite this drink!{" "}
              <FavoriteButton
                handleClick={handleClick}
                isFavorited={isFavorited}
              />
            </p>
          </Card>
        </Container>
      )}
    </>
  );
};

const Container = styled.div``;
const Card = styled.div``;
const Receipe = styled.div``;
const Image = styled.img`
  height: 50vh;
  width: 50vh;
`;

export default DrinkRecepie;
