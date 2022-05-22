import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { NightContext } from "../NightContext";
import Loading from "../Loading";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { _id } = useParams();
  const { currentUser } = useContext(NightContext);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("Add Friend");
  useEffect(() => {
    fetch(`http://localhost:8000/api/users/${_id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserInfo(data.data);
        setLoading(false);
      });
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    setText("Friends");
    const addFriend = await fetch("/api/users/friends/addFriends", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        friend: userInfo.firstName,
        currentUser: currentUser,
      }),
    });
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    setText("Add Friend");
    const addFriend = await fetch("/api/users/friends/deleteFriend", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        friend: userInfo.firstName,
        currentUser: currentUser,
      }),
    });
  };

  return (
    <Container>
      {loading === true && <Loading />}
      {loading === false && (
        <div>
          <UserName>{userInfo.firstName}</UserName>

          <h2>Favorite Drinks: </h2>
          {userInfo.favoriteDrinks.map((val) => {
            return (
              <ul key={val.idDrink}>
                <li>{val.strDrink}</li>
              </ul>
            );
          })}

          <h2>Favorite Games: </h2>
          {userInfo.favoriteGames.map((val) => {
            return (
              <ul key={val._id}>
                <li>{val.game_name}</li>
              </ul>
            );
          })}

          <h2>Friends: </h2>
          {userInfo.friends.map((val) => {
            return (
              <ul>
                <li>{val}</li>
              </ul>
            );
          })}

          <div>
            <Button
              onClick={(e) => {
                text === "Add Friend"
                  ? handleAdd(e, userInfo)
                  : handleDelete(e, userInfo);
              }}
            >
              {text}
            </Button>
          </div>
        </div>
      )}
      <StyledLink to="/users">Back to Users</StyledLink>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const UserName = styled.h1`
  text-align: center;
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

const Button = styled.button`
  width: 200px;
  height: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: black;
  margin-top: 100px;
  border: 3px solid black;
  width: 100px;
  height: 30px;
`;

export default UserProfile;
