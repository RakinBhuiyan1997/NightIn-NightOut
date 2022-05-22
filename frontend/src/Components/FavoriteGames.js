import React, { useContext } from "react";
import styled from "styled-components";
import { NightContext } from "./NightContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const FavoriteGames = () => {
  const { currentUser } = useContext(NightContext);
  console.log(currentUser);

  let navigate = useNavigate();

  const { favoriteGames } = currentUser;
  console.log("Drinks selection", favoriteGames);

  return (
    <Container>
      {favoriteGames.length < 1 && (
        <div>
          <Link to="/nightin/games">Check out our games!</Link>
        </div>
      )}
      {favoriteGames.map((val) => {
        return (
          <Card>
            <Title>Name: {val.game_name}</Title>
            <h3>Players: {val.players}</h3>
            <h3>
              Items Needed:
              {val.items.map((itm) => {
                return (
                  <ul>
                    <li>{itm}</li>
                  </ul>
                );
              })}
            </h3>
            <Instructions>Instructions: {val.instructions}</Instructions>
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
  height: 100%;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vh;
`;

const Title = styled.h2`
  color: white;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
  @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
        0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
        0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
  }
`;

const Instructions = styled.p`
  padding: 10px;
  font-size: 20px;
`;
export default FavoriteGames;
