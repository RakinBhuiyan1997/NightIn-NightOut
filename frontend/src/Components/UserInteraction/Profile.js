import React, { useContext } from "react";
import styled from "styled-components";
import { NightContext } from "../NightContext";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { currentUser } = useContext(NightContext);
  let navigate = useNavigate();

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
          Friends:{" "}
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
          Favorite Drinks:{" "}
          {currentUser.favoriteDrinks.length > 1
            ? currentUser.favoriteDrinks.map((val) => {
                return val;
              })
            : "Check out the drinks and add them to your favorites!"}
        </p>
        <p>
          Favorite Games:{" "}
          {currentUser.favoriteGames.length > 1 ? (
            currentUser.favoriteGames.map((val) => {
              return val;
            })
          ) : (
            <button onClick={goToGames}>Check out the games!</button>
          )}
        </p>
        <button onClick={goToSelection}>Back to homepage</button>
      </Box>
    </Container>
  );
};

const Container = styled.div``;
const Box = styled.div``;
export default Profile;
