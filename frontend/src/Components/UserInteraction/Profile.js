import React, { useContext } from "react";
import styled from "styled-components";
import { NightContext } from "../NightContext";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { currentUser } = useContext(NightContext);
  let navigate = useNavigate();
  console.log(currentUser);
  const goToUsers = (e) => {
    e.preventDefault();
    navigate("/users");
  };

  const goToGames = (e) => {
    e.preventDefault();
    navigate("/nightin/games");
  };

  const goToSelection = (e) => {
    e.preventDefault();
    navigate("/selection");
  };

  return (
    <Container>
      <h1>Hey {currentUser.firstName}, here are your deets</h1>
      <Box>
        <p>
          Friends:
          {currentUser.friends.length > 0 ? (
            currentUser.friends.map((val) => {
              return val;
            })
          ) : (
            <button onClick={goToUsers}>Go add some friends on the app!</button>
          )}
        </p>
        <p>Email: {currentUser.email}</p>
        <p>
          Favorite Drinks:
          {currentUser.favoriteDrinks.length > 1
            ? currentUser.favoriteDrinks.map((val) => {
                return val.strDrink;
              })
            : "Check out the drinks and add them to your favorites!"}
        </p>
        <p>
          Favorite Games:
          {currentUser.favoriteGames.length > 1 ? (
            currentUser.favoriteGames.map((val) => {
              return val.game_name;
            })
          ) : (
            <Button onClick={goToGames}>Check out the games!</Button>
          )}
        </p>
        <ButtonHomePage onClick={goToSelection}>
          Back to homepage
        </ButtonHomePage>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  text-align: center;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
width: 150px;,
height: 50px;
margin-left: 25px;`;

const ButtonHomePage = styled.button`
  width: 150px;
  height: 30px;
  margin-top: 50px;
`;
export default Profile;
