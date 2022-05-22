import React, { useContext, useState } from "react";
import styled from "styled-components";
import { NightContext } from "../NightContext";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(NightContext);
  const [deleteChoice, setDeleteChoice] = useState(false);

  let navigate = useNavigate();

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

  const deleteAccount = async (e) => {
    e.preventDefault();
    await fetch("/api/users/deleteUser", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentUser: currentUser,
      }),
    });
    navigate("/");
  };

  return (
    <div>
      {deleteChoice ? (
        <DeleteContainer>
          <h1>Are you sure you want to delete your account</h1>
          <button onClick={deleteAccount}>Yes delete</button>
          <button onClick={() => setDeleteChoice(false)}>No go back</button>
        </DeleteContainer>
      ) : (
        <Container>
          <Name>Hey {currentUser.firstName}</Name>
          <h2>Your Email: {currentUser.email}</h2>
          <Box>
            <List>Friends:</List>
            {currentUser.friends.length > 0 ? (
              currentUser.friends.map((val, index) => {
                return (
                  <ul key={index}>
                    <li>{val}</li>
                  </ul>
                );
              })
            ) : (
              <button onClick={goToUsers}>
                Go add some friends on the app!
              </button>
            )}

            <List>Favorite Drinks:</List>
            {currentUser.favoriteDrinks.length > 1
              ? currentUser.favoriteDrinks.map((val) => {
                  return (
                    <ul key={val.idDrink}>
                      <li> {val.strDrink}</li>
                    </ul>
                  );
                })
              : "Check out the drinks and add them to your favorites!"}

            <List>Favorite Games:</List>
            {currentUser.favoriteGames.length > 1 ? (
              currentUser.favoriteGames.map((val) => {
                return (
                  <ul key={val._id}>
                    <li> {val.game_name}</li>
                  </ul>
                );
              })
            ) : (
              <Button onClick={goToGames}>Check out the games!</Button>
            )}

            <SignOut onClick={goToHomepage}>Sign Out</SignOut>
            <DeleteAccount onClick={() => setDeleteChoice(true)}>
              Delete Account
            </DeleteAccount>
          </Box>
        </Container>
      )}
    </div>
  );
};

const Container = styled.div`
  height: 100vh;
  text-align: center;
`;

const Name = styled.h1`
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

const DeleteAccount = styled.button`
  width: 150px;
  height: 30px;
  margin-top: 50px;
`;

const DeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
export default Profile;
