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
            <h2>Name: {val.game_name}</h2>
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
            <p>Instructions: {val.instructions}</p>
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
  width: 40vh;
`;
const Image = styled.img`
  height: 30vh;
  width: 30vh;
  margin-top: 10px;
`;
const Title = styled.h2``;
export default FavoriteGames;
