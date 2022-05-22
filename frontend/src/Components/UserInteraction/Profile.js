import React, { useContext } from "react";
import styled from "styled-components";
import { NightContext } from "../NightContext";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(NightContext);
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

  const goToHomepage = (e) => {
    e.preventDefault();
    setCurrentUser({});
    navigate("/");
  };

  return (
    <Container>
      <h1>Hey {currentUser.firstName}, here are your deets</h1>
      <p>Email: {currentUser.email}</p>
      <Box>
        <List>Friends:</List>
        {currentUser.friends.length > 0 ? (
          currentUser.friends.map((val) => {
            return (
              <ul>
                <li>{val}</li>
              </ul>
            );
          })
        ) : (
          <button onClick={goToUsers}>Go add some friends on the app!</button>
        )}

        <List>Favorite Drinks:</List>
        {currentUser.favoriteDrinks.length > 1
          ? currentUser.favoriteDrinks.map((val) => {
              return (
                <ul>
                  <li> {val.strDrink}</li>
                </ul>
              );
            })
          : "Check out the drinks and add them to your favorites!"}

        <List>Favorite Games:</List>
        {currentUser.favoriteGames.length > 1 ? (
          currentUser.favoriteGames.map((val) => {
            return (
              <ul>
                <li> {val.game_name}</li>
              </ul>
            );
          })
        ) : (
          <Button onClick={goToGames}>Check out the games!</Button>
        )}

        <SignOut onClick={goToHomepage}>Sign Out</SignOut>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  text-align: center;
`;

const List = styled.h2``;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
width: 150px;,
height: 50px;
margin-left: 25px;`;

const SignOut = styled.button`
  width: 150px;
  height: 30px;
  margin-top: 50px;
`;
export default Profile;
