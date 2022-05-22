import React, { useContext } from "react";
import styled from "styled-components";
import { NightContext } from "./NightContext";
import { useNavigate } from "react-router-dom";

const FavoriteDrinks = () => {
  const { currentUser } = useContext(NightContext);

  let navigate = useNavigate();

  const { favoriteDrinks } = currentUser;

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
            key={val.idDrink}
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
  height: 40vh;
  width: 40vh;
`;
const Image = styled.img`
  height: 30vh;
  width: 30vh;
  margin-top: 10px;
  border-radius: 50px;
`;
const Title = styled.h2``;
export default FavoriteDrinks;
