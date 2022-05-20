import React, { useContext } from "react";
import styled from "styled-components";
import { NightContext } from "./NightContext";
import { Link } from "react-router-dom";
const Favorites = () => {
  return (
    <Container>
      <StyledLink to="/user/favorites/drink">
        <Card>
          <TitleChoice>Favorite Drinks</TitleChoice>
        </Card>
      </StyledLink>
      <StyledLink to="/user/favorites/games">
        <Card>
          <TitleChoice>Favorite Games</TitleChoice>
        </Card>
      </StyledLink>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
`;
const StyledLink = styled(Link)``;
const Card = styled.div`
  width: 125px;
  height: 125px;
  border: solid 5px black;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
  margin-top: 250px;
`;
const TitleChoice = styled.h2`
  margin-top: 45px;
  text-align: center;
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;

export default Favorites;
