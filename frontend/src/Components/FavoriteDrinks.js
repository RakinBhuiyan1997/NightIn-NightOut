import React, { useContext } from "react";
import styled from "styled-components";
import { NightContext } from "./NightContext";
import { useNavigate } from "react-router-dom";

const FavoriteDrinks = () => {
  const { currentUser } = useContext(NightContext);
  console.log(currentUser);

  let navigate = useNavigate();

  const { favoriteDrinks } = currentUser;
  console.log("Drinks selection", favoriteDrinks);

  const handleNavigate = (e, val) => {
    e.preventDefault();
    navigate(`/nightin/drinks/drink/${val.idDrink}`);
  };

  return (
    <Container>
      {favoriteDrinks.map((val) => {
        return (
          <Card
            onClick={(e) => {
              handleNavigate(e, val);
            }}
          >
            <Image src={val.strDrinkThumb} alt="Drink image" />
            <Title>{val.strDrink}</Title>
          </Card>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 5px black;
  height: 40vh;
  width: 40vh;
`;
const Image = styled.img`
  height: 30vh;
  width: 30vh;
  margin-top: 10px;
`;
const Title = styled.h2``;
export default FavoriteDrinks;