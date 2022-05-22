import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import FavoriteButton from "./FavoriteButton";
import { NightContext } from "./NightContext";
import { Link } from "react-router-dom";

const DrinkRecepie = () => {
  const { id } = useParams();
  const { currentUser, setCurrentUser } = useContext(NightContext);
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
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrentUser(data.data);
      });
  };

  const removeDrink = async () => {
    const drink = await fetch("/api/users/favorites/deleteDrink", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredients,
        currentUser: currentUser,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrentUser(data.data);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const isFavorite = currentUser.favoriteDrinks.some(
      (val) => val.idDrink === ingredients.idDrink
    );

    if (isFavorite) {
      removeDrink();
      return;
    }
    addDrink();
  };

  const isFavorited = currentUser?.favoriteDrinks?.some(
    (x) => x.idDrink === ingredients.idDrink
  );

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div>
          <Card>
            <Image src={ingredients.strDrinkThumb} alt="drink image" />
            <Receipe>
              <h2>Ingredients</h2>
              {arr.map((val, index) => {
                return (
                  <ul key={index}>
                    <li>{val}</li>
                  </ul>
                );
              })}
              <h2>Measurements</h2>
              {int.map((val, index) => {
                return (
                  <ul key={index}>
                    <li>{val}</li>
                  </ul>
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
        </div>
      )}
    </>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`;
const Receipe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  height: 40vh;
  width: 40vh;
  border-radius: 35px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  width: 150px;
  height: 30px;
`;

export default DrinkRecepie;
