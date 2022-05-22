import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { NightContext } from "../NightContext";
import Loading from "../Loading";
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

          <h4>
            Favorite Drinks:{" "}
            {userInfo.favoriteDrinks.map((val) => {
              return (
                <ul>
                  <li>{val.strDrink}</li>
                </ul>
              );
            })}
          </h4>
          <h4>
            Favorite Games:{" "}
            {userInfo.favoriteGames.map((val) => {
              return (
                <ul>
                  <li>{val.game_name}</li>
                </ul>
              );
            })}
          </h4>

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
`;

const Button = styled.button`
  width: 200px;
  height: 30px;
`;

export default UserProfile;
